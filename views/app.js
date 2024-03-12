const btn=document.getElementById('btn')


function handleButtonEvent()
{
    console.log('fetching api')
}


const debounce=(cb,delay)=>
{
    let timer;
    return function(...args)
    {
        clearTimeout(timer)
        timer=setTimeout(()=>
        {
            cb.apply(this,args)
        },delay)
    }
}

const handleDebounce=debounce(handleButtonEvent,500)

btn.addEventListener('click',()=>
{
    handleDebounce()
})