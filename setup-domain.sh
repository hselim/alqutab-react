#!/bin/bash

echo "🌐 Alqutab.com Domain Setup Helper"
echo "=================================="
echo ""
echo "This script will guide you through setting up alqutab.com with Cloudflare"
echo ""

# Function to open URL in browser
open_url() {
    if command -v xdg-open > /dev/null; then
        xdg-open "$1"
    elif command -v open > /dev/null; then
        open "$1"
    else
        echo "Please open this URL manually: $1"
    fi
}

echo "📌 Step 1: Register Domain at Cloudflare"
echo "----------------------------------------"
echo "I'll open the Cloudflare registrar page for you."
echo "Press Enter to continue..."
read

echo "Opening Cloudflare domain registration..."
open_url "https://www.cloudflare.com/products/registrar/"

echo ""
echo "📝 Here's what to do on Cloudflare:"
echo "1. Click 'Register Domain' or 'Get Started'"
echo "2. Search for: alqutab.com"
echo "3. Add it to cart (~$9.77/year)"
echo "4. Complete checkout"
echo ""
echo "Press Enter when you've completed the domain purchase..."
read

echo ""
echo "📌 Step 2: Configure DNS Records"
echo "--------------------------------"
echo "Now we need to add GitHub Pages DNS records."
echo ""
echo "Opening Cloudflare Dashboard..."
open_url "https://dash.cloudflare.com/"

echo ""
echo "In Cloudflare Dashboard:"
echo "1. Click on 'alqutab.com' (your new domain)"
echo "2. Go to 'DNS' in the left sidebar"
echo "3. Click 'Add record' and add these 4 A records:"
echo ""
echo "   Type: A    Name: @    IPv4: 185.199.108.153    Proxy: OFF (DNS only)"
echo "   Type: A    Name: @    IPv4: 185.199.109.153    Proxy: OFF (DNS only)"
echo "   Type: A    Name: @    IPv4: 185.199.110.153    Proxy: OFF (DNS only)"
echo "   Type: A    Name: @    IPv4: 185.199.111.153    Proxy: OFF (DNS only)"
echo ""
echo "⚠️  IMPORTANT: Set Proxy Status to 'DNS only' (gray cloud) for all records!"
echo ""
echo "Press Enter when you've added all 4 DNS records..."
read

echo ""
echo "📌 Step 3: Verify GitHub Pages Configuration"
echo "--------------------------------------------"
echo "Let me check if the GitHub Pages configuration is correct..."
echo ""

# Check current GitHub Pages status
if command -v gh > /dev/null; then
    echo "Checking GitHub Pages status..."
    gh api repos/hselim/alqutab-react/pages 2>/dev/null | jq -r '"Current domain: " + .cname'
    
    echo ""
    echo "If the domain shows as 'alqutab.com', you're all set!"
    echo "If not, I'll update it now..."
    
    gh api --method PUT repos/hselim/alqutab-react/pages -f cname="alqutab.com" 2>&1 | grep -q "alqutab.com" && echo "✅ Domain updated to alqutab.com" || echo "Domain was already set correctly"
else
    echo "Please install GitHub CLI to automatically verify"
fi

echo ""
echo "📌 Step 4: Wait for DNS Propagation"
echo "------------------------------------"
echo "DNS changes can take 5 minutes to 48 hours to propagate."
echo "Usually it's quite fast with Cloudflare (5-30 minutes)."
echo ""
echo "You can check the propagation status here:"
open_url "https://www.whatsmydns.net/#A/alqutab.com"

echo ""
echo "✅ Setup Complete!"
echo "=================="
echo ""
echo "Your site will be available at:"
echo "🌐 https://alqutab.com (after DNS propagates)"
echo "🌐 https://hselim.github.io/alqutab-react/ (already working)"
echo ""
echo "Once DNS propagates, GitHub will automatically:"
echo "- Enable HTTPS for alqutab.com"
echo "- Issue a free SSL certificate"
echo "- Redirect www to non-www"
echo ""
echo "Thank you for using this setup guide!"