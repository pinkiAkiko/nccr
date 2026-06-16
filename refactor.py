import os
import re

components_dir = r"c:\nccr\nccr-react\src\components"
pages_dir = r"c:\nccr\nccr-react\src\pages"
os.makedirs(components_dir, exist_ok=True)

# Function to replace image sources with sequentially numbered local assets
def replace_images(content):
    img_pattern = re.compile(r'src="(https://lh3[^"]+)"')
    counter = {"val": 1}
    def replacer(match):
        v = counter["val"]
        counter["val"] += 1
        name = "screen" if v == 1 else f"screen{v}"
        # cycle if > 21
        if v > 21:
            name = f"screen{(v%21)+1}"
        return f'src="/src/assets/{name}.png"'
    
    return img_pattern.sub(replacer, content)

# Let's extract Navbar and Footer from Home.jsx
home_path = os.path.join(pages_dir, "Home.jsx")
with open(home_path, 'r', encoding='utf-8') as f:
    home_content = f.read()

# Naive extraction using regex for <header ...>...</header>
header_match = re.search(r'(<header.*?)(?=<!-- Hero Section -->)', home_content, re.DOTALL)
footer_match = re.search(r'(<footer.*</footer>)', home_content, re.DOTALL)

navbar_code = header_match.group(1) if header_match else ""
footer_code = footer_match.group(1) if footer_match else ""

# Wait, the comment is {/* Hero Section */} not <!-- -->
header_match = re.search(r'(<header.*?</header>)', home_content, re.DOTALL)
navbar_code = header_match.group(1) if header_match else ""

# Let's write Navbar.jsx
if navbar_code:
    navbar_code = replace_images(navbar_code)
    with open(os.path.join(components_dir, "Navbar.jsx"), "w", encoding="utf-8") as f:
        f.write(f"""import React from 'react';
import {{ Link }} from 'react-router-dom';

const Navbar = () => {{
  return (
    {navbar_code}
  );
}};

export default Navbar;
""")

if footer_code:
    footer_code = replace_images(footer_code)
    with open(os.path.join(components_dir, "Footer.jsx"), "w", encoding="utf-8") as f:
        f.write(f"""import React from 'react';
import {{ Link }} from 'react-router-dom';

const Footer = () => {{
  return (
    {footer_code}
  );
}};

export default Footer;
""")

# Now update Home, Page1, Page2 to use Layout and strip their headers and footers
for page in ["Home.jsx", "Page1.jsx", "Page2.jsx"]:
    path = os.path.join(pages_dir, page)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Strip <header> and <footer> and <nav> for page1/2 if they are the topmost ones
    content = re.sub(r'<header.*?</header>', '', content, count=1, flags=re.DOTALL)
    content = re.sub(r'<nav.*?</nav>', '', content, count=1, flags=re.DOTALL)
    content = re.sub(r'<footer.*?</footer>', '', content, flags=re.DOTALL)
    
    # Replace images
    content = replace_images(content)
    
    # Add imports
    content = content.replace("import React, { useEffect } from 'react';", 
                              "import React, { useEffect } from 'react';\nimport Navbar from '../components/Navbar';\nimport Footer from '../components/Footer';")
    
    # Insert Navbar and Footer into return
    content = content.replace('{/* HTML goes here */}', '<Navbar />\n            {/* HTML goes here */}')
    # Put Footer before the last </div>
    last_div = content.rfind('</div>')
    if last_div != -1:
        content = content[:last_div] + '    <Footer />\n        ' + content[last_div:]
        
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Refactored to use Navbar and Footer, and replaced images.")
