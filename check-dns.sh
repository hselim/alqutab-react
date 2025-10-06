#!/bin/bash

echo "🔍 Checking DNS propagation for alqutab.com..."
echo "================================================"
echo ""

# Check with different DNS servers
echo "Checking Cloudflare DNS (1.1.1.1):"
dig +short alqutab.com @1.1.1.1
if [ $? -eq 0 ] && [ -n "$(dig +short alqutab.com @1.1.1.1)" ]; then
    echo "✅ Cloudflare DNS resolved!"
else
    echo "⏳ Not yet propagated to Cloudflare DNS"
fi
echo ""

echo "Checking Google DNS (8.8.8.8):"
dig +short alqutab.com @8.8.8.8
if [ $? -eq 0 ] && [ -n "$(dig +short alqutab.com @8.8.8.8)" ]; then
    echo "✅ Google DNS resolved!"
else
    echo "⏳ Not yet propagated to Google DNS"
fi
echo ""

echo "Checking local DNS:"
dig +short alqutab.com
if [ $? -eq 0 ] && [ -n "$(dig +short alqutab.com)" ]; then
    echo "✅ Local DNS resolved!"
else
    echo "⏳ Not yet propagated to local DNS"
fi
echo ""

# Try to access the site
echo "Testing HTTP access:"
if curl -s -o /dev/null -w "%{http_code}" http://alqutab.com | grep -q "301\|200\|302"; then
    echo "✅ Site is responding!"
else
    echo "⏳ Site not accessible yet"
fi
echo ""

echo "================================================"
echo "Current time: $(date)"
echo ""
echo "💡 Tips:"
echo "  • DNS propagation usually takes 5-30 minutes"
echo "  • Clear your browser cache if needed"
echo "  • Try incognito/private mode"
echo "  • Your site works at: https://hselim.github.io/alqutab-react/"
echo ""
echo "Run this script again in a few minutes to check progress!"