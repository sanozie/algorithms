import fs from "fs"
import ora from 'ora'
import enq from 'enquirer'
const { Select } = enq

const mapIgnore = ['index.js']
const filemap = directorySearch('./dist', {})

init()

async function init() {
    console.log("\n\nHello, welcome to algorithms in js. Hope this helps you on your leetcode journey. - Sam\n")
    console.log("Pick a file to run, or a directory to find files in")
    await query(filemap, './', 0)
}

async function query(map, path, nest) {
    let choices = nest !== 0 ? [...Object.keys(map), '[ Go Back ]', '[ Exit ]'] : [...Object.keys(map), '[ Exit ]']
    const select = new Select({
        choices
    })

    const choice = await select.run()
    path = `${path}/${choice}`

    if(map[choice] === true) {
        const spinner = ora(`Loading ${path}`).start()
        setTimeout(() => {
            spinner.succeed()
            require(path)
        }, 1000)

    } else if(choice === '[ Go Back ]') {
        return 'back'
    } else if(choice === '[ Exit ]') {
        return 'exit'
    }
    else {
        map = map[choice]
        const backLoop = async (map, path, nest) => {
            console.log(path)
            let res = await query(map, path, nest)
            if(res === 'back') {
                let deep = path.split('/').filter(item => item !== '.' && item !== '')
                await deep.pop()
                map = filemap
                for(let key of deep) {
                    map = map[key]
                }

                path = path.split('/')
                await path.pop()
                path = path.join('/')
                await backLoop(map, path, nest - 1)
            } else if (res === 'exit') {
                console.log('bye!')
                return
            }
        }
        await backLoop(map, path, nest + 1)
    }
}




// Can use node fs module to recursively search for files and create this schema in the future
function directorySearch(dirPath, structure) {
    let files = fs.readdirSync(dirPath)
    files.forEach(file => {
        if(!mapIgnore.includes(file)) {
            let path = dirPath + "/" + file
            if (fs.statSync(path).isDirectory()) {
                structure[file] = directorySearch(path, {})
            } else {
                structure[file] = true
            }
        }
    })

    return structure
}

