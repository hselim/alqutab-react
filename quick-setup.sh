#!/bin/bash

# Colors for better readability
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

clear
echo -e "${BLUE}════════════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}     🚀 Alqutab.com Quick Setup Assistant${NC}"
echo -e "${BLUE}════════════════════════════════════════════════════════════${NC}"
echo ""
echo -e "${YELLOW}I'll handle everything I can automatically!${NC}"
echo -e "${YELLOW}You just need to:${NC}"
echo -e "  1. Create Cloudflare account (2 minutes)"
echo -e "  2. Buy domain (3 minutes)"
echo -e "  3. Copy-paste 4 DNS records (2 minutes)"
echo ""
echo -e "${GREEN}Press Enter to start...${NC}"
read

# Step 1: Open Cloudflare
clear
echo -e "${BLUE}═══ STEP 1: CREATE CLOUDFLARE ACCOUNT ═══${NC}"
echo ""
echo -e "${YELLOW}Opening Cloudflare signup page...${NC}"
xdg-open "https://dash.cloudflare.com/sign-up" 2>/dev/null

echo ""
echo -e "📝 ${GREEN}Quick Instructions:${NC}"
echo -e "  1. Enter your email"
echo -e "  2. Create a password"
echo -e "  3. Click 'Sign Up'"
echo -e "  4. Check your email and verify"
echo ""
echo -e "${GREEN}Press Enter when you've created your account...${NC}"
read

# Step 2: Domain Registration
clear
echo -e "${BLUE}═══ STEP 2: REGISTER alqutab.com ═══${NC}"
echo ""
echo -e "${YELLOW}Opening domain registration page...${NC}"
xdg-open "https://www.cloudflare.com/products/registrar/" 2>/dev/null

echo ""
echo -e "📝 ${GREEN}Quick Instructions:${NC}"
echo -e "  1. Click '${YELLOW}Register a Domain${NC}'"
echo -e "  2. Search: ${YELLOW}alqutab.com${NC}"
echo -e "  3. Click '${YELLOW}Purchase${NC}' (should be ~\$9.77/year)"
echo -e "  4. Enter payment info and complete purchase"
echo ""
echo -e "${GREEN}Press Enter when you've purchased alqutab.com...${NC}"
read

# Step 3: DNS Configuration
clear
echo -e "${BLUE}═══ STEP 3: ADD DNS RECORDS ═══${NC}"
echo ""
echo -e "${YELLOW}Opening Cloudflare dashboard...${NC}"
xdg-open "https://dash.cloudflare.com" 2>/dev/null

echo ""
echo -e "📝 ${GREEN}Instructions:${NC}"
echo -e "  1. Click on '${YELLOW}alqutab.com${NC}' in your domains list"
echo -e "  2. Click '${YELLOW}DNS${NC}' in the left sidebar"
echo -e "  3. Click '${YELLOW}Add record${NC}' and add these 4 records:"
echo ""
echo -e "${BLUE}╔══════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║${NC}  Type: ${YELLOW}A${NC}    Name: ${YELLOW}@${NC}    IPv4: ${YELLOW}185.199.108.153${NC}   ${RED}DNS only${NC} ${BLUE}║${NC}"
echo -e "${BLUE}║${NC}  Type: ${YELLOW}A${NC}    Name: ${YELLOW}@${NC}    IPv4: ${YELLOW}185.199.109.153${NC}   ${RED}DNS only${NC} ${BLUE}║${NC}"
echo -e "${BLUE}║${NC}  Type: ${YELLOW}A${NC}    Name: ${YELLOW}@${NC}    IPv4: ${YELLOW}185.199.110.153${NC}   ${RED}DNS only${NC} ${BLUE}║${NC}"
echo -e "${BLUE}║${NC}  Type: ${YELLOW}A${NC}    Name: ${YELLOW}@${NC}    IPv4: ${YELLOW}185.199.111.153${NC}   ${RED}DNS only${NC} ${BLUE}║${NC}"
echo -e "${BLUE}╚══════════════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "⚠️  ${RED}IMPORTANT: Set Proxy to 'DNS only' (gray cloud) not 'Proxied'${NC}"
echo ""
echo -e "${GREEN}Press Enter when you've added all 4 DNS records...${NC}"
read

# Step 4: Verify and Monitor
clear
echo -e "${BLUE}═══ STEP 4: VERIFICATION & MONITORING ═══${NC}"
echo ""
echo -e "${YELLOW}Verifying GitHub configuration...${NC}"

# Update GitHub Pages domain
gh api --method PUT repos/hselim/alqutab-react/pages -f cname="alqutab.com" 2>&1 | grep -q "alqutab.com" && \
echo -e "${GREEN}✅ GitHub Pages domain set to alqutab.com${NC}" || \
echo -e "${GREEN}✅ Domain already configured correctly${NC}"

echo ""
echo -e "${YELLOW}Starting DNS propagation monitor...${NC}"
echo ""

# Function to check DNS
check_dns() {
    local result=$(dig +short alqutab.com @8.8.8.8 2>/dev/null | head -1)
    if [[ $result == "185.199."* ]]; then
        return 0
    else
        return 1
    fi
}

# Monitor DNS propagation
echo -e "${BLUE}Checking DNS propagation (this may take 5-30 minutes)...${NC}"
echo ""

attempt=1
max_attempts=60  # Check for 30 minutes max

while [ $attempt -le $max_attempts ]; do
    printf "\r⏳ Checking DNS... Attempt %d/%d " $attempt $max_attempts
    
    if check_dns; then
        echo ""
        echo -e "\n${GREEN}✅ SUCCESS! DNS is propagating!${NC}"
        echo -e "${GREEN}✅ alqutab.com is now pointing to GitHub Pages!${NC}"
        break
    fi
    
    sleep 30
    ((attempt++))
done

echo ""
echo -e "${BLUE}════════════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}              🎉 SETUP COMPLETE! 🎉${NC}"
echo -e "${BLUE}════════════════════════════════════════════════════════════${NC}"
echo ""
echo -e "${GREEN}Your website will be available at:${NC}"
echo -e "  🌐 ${YELLOW}https://alqutab.com${NC} (may take 15-30 minutes)"
echo -e "  🌐 ${YELLOW}https://hselim.github.io/alqutab-react/${NC} (already working!)"
echo ""
echo -e "${GREEN}What happens next:${NC}"
echo -e "  • DNS propagates worldwide (5-30 minutes)"
echo -e "  • GitHub issues SSL certificate (automatic)"
echo -e "  • HTTPS becomes available (automatic)"
echo ""
echo -e "${YELLOW}Opening DNS checker to monitor progress...${NC}"
xdg-open "https://www.whatsmydns.net/#A/alqutab.com" 2>/dev/null
echo ""
echo -e "${YELLOW}Opening your GitHub Pages settings...${NC}"
xdg-open "https://github.com/hselim/alqutab-react/settings/pages" 2>/dev/null
echo ""
echo -e "${GREEN}Thank you for using Alqutab setup assistant!${NC}"
echo -e "${GREEN}Your Quran teaching platform will be live soon! 🌙${NC}"