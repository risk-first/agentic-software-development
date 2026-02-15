#!/bin/bash
# Validate Gemara front matter against CUE schema
# Usage: ./.dev/scripts/validate.sh

set -e

cd "$(dirname "$0")/../.."

# Check dependencies
command -v cue >/dev/null 2>&1 || { echo "❌ CUE not installed. Run: brew install cue"; exit 1; }
command -v yq >/dev/null 2>&1 || { echo "❌ yq not installed. Run: brew install yq"; exit 1; }

ERRORS=0

validate_file() {
  local file="$1"
  local schema="$2"
  
  # Extract front matter and get gemara as JSON
  frontmatter=$(awk '/^---$/{if(p)exit;p=1;next}p' "$file")
  gemara_yaml=$(echo "$frontmatter" | yq '.gemara' 2>/dev/null)
  
  if [ "$gemara_yaml" = "null" ] || [ -z "$gemara_yaml" ]; then
    echo "  ⚠ $file - no gemara front matter"
    return 0
  fi
  
  # Write gemara YAML to temp file for validation
  tmpfile=$(mktemp).yaml
  echo "$gemara_yaml" > "$tmpfile"
  
  if cue vet "$tmpfile" ./.dev/cue/gemara/*.cue -d "$schema" 2>/dev/null; then
    echo "  ✓ $file"
    rm -f "$tmpfile"
    return 0
  else
    echo "  ❌ $file - validation failed"
    cue vet "$tmpfile" ./.dev/cue/gemara/*.cue -d "$schema" 2>&1 | head -5 | sed 's/^/    /'
    rm -f "$tmpfile"
    return 1
  fi
}

echo "🔍 Validating risk files against #Threat schema..."
for file in risks/*.md; do
  if [ -f "$file" ]; then
    validate_file "$file" "#Threat" || ERRORS=$((ERRORS + 1))
  fi
done

echo ""
echo "🔍 Validating practice files against #Control schema..."
for file in practices/*.md; do
  if [ -f "$file" ]; then
    validate_file "$file" "#Control" || ERRORS=$((ERRORS + 1))
  fi
done

echo ""
echo "🔍 Validating capability files against #Capability schema..."
for file in capabilities/*.md; do
  if [ -f "$file" ]; then
    validate_file "$file" "#Capability" || ERRORS=$((ERRORS + 1))
  fi
done

echo ""
if [ $ERRORS -eq 0 ]; then
  echo "✅ All validations passed!"
  exit 0
else
  echo "❌ $ERRORS validation error(s) found"
  exit 1
fi
