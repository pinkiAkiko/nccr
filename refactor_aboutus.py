import re
import os

input_file = r"c:\nccr\aboutus.html"
output_file = r"c:\nccr\nccr-react\src\pages\AboutUs.jsx"

with open(input_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract <main>...</main>
main_match = re.search(r'(<main.*?</main>)', content, re.DOTALL | re.IGNORECASE)
if main_match:
    main_html = main_match.group(1)
else:
    print("Could not find <main> tag")
    exit(1)

# Fix class to className
main_html = main_html.replace('class="', 'className="')

# Fix <br>
main_html = main_html.replace('<br>', '<br/>')

# Fix webgl-shader tag
main_html = main_html.replace('{{DATA:ANIMATION:ANIMATION_2}}', 'DATA:ANIMATION:ANIMATION_2')
main_html = main_html.replace('<webgl-shader', '<div')
main_html = main_html.replace('</webgl-shader>', '</div>')

# Fix images
img_pattern = re.compile(r'src="(https://lh3[^"]+)"')
counter = {"val": 10} # start from some number
def replacer(match):
    v = counter["val"]
    counter["val"] += 1
    name = f"screen{v}"
    if v > 21: name = f"screen{(v%21)+1}"
    return f'src="/src/assets/{name}.png"'

main_html = img_pattern.sub(replacer, main_html)

# Also fix the inline style or comments if any
main_html = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', main_html, flags=re.DOTALL)

# Wrap in component
jsx = f"""import React, {{ useEffect }} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {{
    useEffect(() => {{
        const observerOptions = {{ threshold: 0.1 }};
        const observer = new IntersectionObserver((entries) => {{
            entries.forEach(entry => {{
                if (entry.isIntersecting) {{
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }}
            }});
        }}, observerOptions);

        document.querySelectorAll('section').forEach(section => {{
            section.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
            observer.observe(section);
        }});
        
        return () => observer.disconnect();
    }}, []);

    return (
        <div className="bg-background text-on-background font-body-md selection:bg-secondary/30">
            <Navbar />
            {main_html}
            <Footer />
        </div>
    );
}};

export default AboutUs;
"""

with open(output_file, 'w', encoding='utf-8') as f:
    f.write(jsx)

print("Created AboutUs.jsx")
