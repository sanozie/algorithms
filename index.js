import fs from "fs"

import enq from 'enquirer'
const { Select } = enq

// Can use node fs module to recursively search for files and create this schema in the future

const traverse = async tree => {
    let prompt = new Select({
        name: 'folder',
        message: 'Choose folder',
        choices: Object.keys(tree)
    })

    let answer = await prompt.run()
    if (typeof tree[answer] === 'object') {
        traverse(tree[answer])
    } else {
        prompt = new Select({
            name: 'file',
            message: 'Choose file',
            choices: tree[answer]
        })

        answer = await prompt.run()
        console.log(answer)
    }
}

function directorySearch(dirPath, structure) {
    let files = fs.readdirSync(dirPath)
    console.log(structure)
    files.forEach(file => {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            structure[file] = directorySearch(dirPath + "/" + file, {})
        } else {
            let parent = dirPath.split('/').pop()
            structure[parent].push(file)
        }
    })

    return arrayOfFiles
}

directorySearch('./src', {})