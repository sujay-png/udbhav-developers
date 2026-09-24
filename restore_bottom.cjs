const fs = require('fs');

// Read the original file
const original = fs.readFileSync('temp_backup.astro', 'utf16le');
const originalLines = original.split('\n');

// Read the current file
const currentFilePath = 'src/pages/projects/udbhav-chinmaya/3-bhk-for-sale-kadri-mangalore.astro';
let current = fs.readFileSync(currentFilePath, 'utf-8');

// Find the last known good line in the current file
// The user's diff showed they stopped around `observer.observe(journeySection);`
const searchStr = 'observer.observe(journeySection);';
const insertionPoint = current.indexOf(searchStr);

if (insertionPoint !== -1) {
    // Find where this is in the original file
    const origIndex = original.indexOf(searchStr);
    
    if (origIndex !== -1) {
        // Find the start of the next block in original (e.g. after `</script>`)
        // The script block ends a few lines after `observer.observe`
        
        // Wait, the user deleted EVERYTHING after the script block?
        // Let's just find `</script>` after origIndex.
        let scriptEndOrig = original.indexOf('</script>', origIndex);
        
        let scriptEndCurr = current.indexOf('</script>', insertionPoint);
        
        if (scriptEndOrig !== -1 && scriptEndCurr !== -1) {
            // Append the rest of original to the end of current's script block
            const restOfOriginal = original.substring(scriptEndOrig + 9);
            const newContent = current.substring(0, scriptEndCurr + 9) + '\n' + restOfOriginal;
            
            fs.writeFileSync(currentFilePath, newContent, 'utf-8');
            console.log('Restored the missing bottom half of the file!');
        } else {
            console.log('Could not find </script>');
        }
    } else {
        console.log('Could not find search string in original');
    }
} else {
    console.log('Could not find search string in current');
}
