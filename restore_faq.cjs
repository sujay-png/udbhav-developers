const fs = require('fs');

const original = fs.readFileSync('temp_backup.astro', 'utf16le');
const currentFilePath = 'src/pages/projects/udbhav-chinmaya/3-bhk-for-sale-kadri-mangalore.astro';
let current = fs.readFileSync(currentFilePath, 'utf-8');

// The user's file accidentally deleted everything after the script block in the body, OR they deleted everything from `<section class="faq` onwards and only left the `<script>` block.
// Wait! Let's see the end of the current file!
console.log('Current ends with:');
console.log(current.slice(-100));

// Find `<section class="faq` in original
const faqIndex = original.indexOf('<section class="faq"');
if (faqIndex !== -1) {
    const missingContent = original.substring(faqIndex);
    // Remove the `</body></html>` from the current file
    const bodyIndex = current.lastIndexOf('</body>');
    if (bodyIndex !== -1) {
        // We will insert missingContent BEFORE the script block?
        // Wait, where is the script block in the original? The original has NO script block!
        // The script block was added by the user! (The journey animation observer).
        
        // Actually, the best place to insert the missing content is right BEFORE the `<script>` tag that starts the journey observer!
        // Let's find `<script>` in the current file.
        // Actually, there might be multiple `<script>` tags. Let's find the last `<script>`.
        const scriptIndex = current.lastIndexOf('<script');
        if (scriptIndex !== -1) {
             // We can insert the missingContent right before this script block
             // Wait, missingContent contains its own `</body></html>` because it's the rest of the original file.
             // We need to strip `</body></html>` from missingContent.
             const strippedMissing = missingContent.replace(/<\/body>\s*<\/html>/i, '');
             
             const newContent = current.substring(0, scriptIndex) + '\n' + strippedMissing + '\n' + current.substring(scriptIndex);
             fs.writeFileSync(currentFilePath, newContent, 'utf-8');
             console.log('Restored FAQ successfully');
        } else {
             console.log('Could not find <script in current');
        }
    } else {
        console.log('Could not find </body> in current');
    }
} else {
    console.log('Could not find <section class="faq" in original');
}
