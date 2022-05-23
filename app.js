// window.onload = () =>{
//     main()
// }

// function main() {
//     const root = document.getElementById('root');
//     const btn = document.getElementById('btn');
//     const output = document.getElementById('output');

//     btn.addEventListener('click', function () {
//         const bgColor = HEX()
//         root.style.backgroundColor = bgColor;
//         output.value = bgColor
//     })
    
// }

// function HEX() {
//     // HEX = #000000  --> #ffffff
    
//     const red = Math.floor(Math.random() * 255);
//     const green = Math.floor(Math.random() * 255);
//     const blue = Math.floor(Math.random() * 255);

//     return `#${red.toString(16)}${blue.toString(16)}${green.toString(16)}`
// }


// now try unseen :)



window.onload = () => {
    main()
}
function main() {
    // collect all references
    const root = document.getElementById('root');
    const btn = document.getElementById('btn');
    const output = document.getElementById('output');

    const copyBtn = document.getElementById('copy_btn');

    btn.addEventListener('click', function () {
        const bgColor = hex()
        root.style.backgroundColor = bgColor;
        output.value = bgColor;

    })

    copyBtn.addEventListener('click', function () {
         
        navigator.clipboard.writeText(output.value)
     })
    
}


//generate Color code function
function hex() {
    
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`

}