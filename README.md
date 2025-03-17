# 🔗 Anchor Insights Automation Script  

## 🚀 Overview  

This **Google Apps Script** automates the process of **analyzing internal and external anchor texts** in Google Sheets. The script extracts anchor text distribution for URLs, **counts occurrences**, and provides actionable insights for SEO optimization.  

By automating anchor text analysis, SEO professionals can **identify over-optimized anchors, improve internal linking strategies, and maintain a natural backlink profile**—all crucial for search engine rankings.  

---

## 🛠 Why This Script Is Essential for SEO  

### 🔍 1. **Anchor Text Optimization**  
Google uses **anchor text as a ranking signal** to understand page relevance. If multiple links to a page use the same anchor text, it may signal **keyword stuffing**. This script helps you:  

- **Identify anchor text variations** used across internal and external links.  
- **Find overused or missing keywords** in anchor text distribution.  
- **Ensure a natural and diverse linking structure** to avoid penalties.  

### 📊 2. **Internal Linking Insights**  
Proper **internal linking** distributes page authority (PageRank) effectively. This script:  

- **Maps all internal anchor text usage per URL** to reveal internal link structures.  
- **Highlights missing or excessive internal links** that could impact rankings.  
- **Supports silo structures** by ensuring relevant pages interlink strategically.  

### 🔗 3. **Backlink & External Anchor Analysis**  
For **external link building**, maintaining a **natural backlink profile** is crucial. This script:  

- **Analyzes backlinks' anchor text distribution** to avoid over-optimized link patterns.  
- **Helps track branded vs. keyword-rich anchor texts**, essential for SEO safety.  
- **Finds low-quality or repetitive anchors** that may trigger Google’s spam filters.  

---

## ⚙️ How It Works  

The script operates in two parts:  

1. `matchAndCountAnchors()` → Analyzes **internal anchors** (from `internal anchors` sheet) and logs them in `ANCHOR INSIGHTS`.  
2. `matchAndCountAnchorsExternal()` → Analyzes **external anchors** (from `External Anchors` sheet) and logs them in `EXTERNAL ANCHOR INSIGHTS`.  

### 📌 Steps in Each Function  

- Retrieves the **list of URLs** from the insights sheet.  
- Extracts **anchor text and corresponding URLs** from the internal/external anchor sheets.  
- **Counts the occurrences of each anchor text** for a URL.  
- **Sorts anchor texts by frequency** in descending order.  
- **Outputs the data into Google Sheets**, allowing for easy review and action.  

---

## 🔧 How to Use  

### 📥 1. Add the Script to Google Apps Script Editor  

1. Open **Google Sheets** → `Extensions` → `Apps Script`.  
2. Copy and paste the script into the **script editor**.  
3. Save and **run the function**.  

### 📝 2. Ensure Proper Google Sheets Structure  

#### **Internal Anchor Insights Sheet**  

| Column | Description |
|--------|------------|
| A | URL |
| B, D, F... | Anchor Texts |
| C, E, G... | Count |

#### **Internal Anchors Sheet**  

| Column | Description |
|--------|------------|
| B | URL |
| C | Anchor Text |

#### **External Anchor Insights Sheet**  

| Column | Description |
|--------|------------|
| A | URL |
| B, D, F... | Anchor Texts |
| C, E, G... | Count |

#### **External Anchors Sheet**  

| Column | Description |
|--------|------------|
| B | URL |
| C | Anchor Text |

- The script will populate **anchor texts and their counts** next to each URL in the insights sheets.  

---

## 🎯 SEO Use Cases  

### ✅ **1. Prevent Anchor Text Over-Optimization**  
Avoid getting penalized by search engines for **repetitive keyword-rich anchors** by ensuring a **natural mix of branded, exact-match, and partial-match anchors**.  

### ✅ **2. Optimize Internal Linking for Maximum SEO Value**  
Find pages with **poor anchor text distribution** and **optimize internal linking** to boost rankings of key pages.  

### ✅ **3. Track External Links & Improve Link-Building Strategies**  
Analyze how other websites are linking to your pages and **adjust your outreach strategy** accordingly.  

---

## 🚀 Take Your SEO to the Next Level  

With **automated anchor text analysis**, this script saves hours of manual work and provides valuable **SEO insights** for better rankings, improved link equity, and smarter internal linking.  

> **Pro Tip:** Run this script weekly to monitor anchor text distribution trends and **continuously refine your linking strategy**.  

---

👨‍💻 **Need help or improvements?** Feel free to tweak the script for your custom SEO workflows! 🚀  
