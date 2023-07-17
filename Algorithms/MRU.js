let flag=0;
async function display()
{
    if(flag==1)
    window.location.reload(true);
    else
    flag++;
    var pageFault=0, pageHit=0;
    const x = document.getElementById('cap').value;
    let s = document.getElementById('pages').value;
    let y = document.getElementsByClassName('divstyle');
    const newarr=[];
    const arr= s.split(' ').map(Number);
    const len = arr.length;
    let j=0;
    let i=0;

    while(i<x && j<len)
    {
        const index = newarr.indexOf(arr[j]);
        if(index==-1)
        {
            const node = document.createElement('div');
            node.classList.add('divstyle');
            node.classList.add('fade-div');
            document.getElementById('container').appendChild(node);
            y = document.getElementsByClassName('divstyle');
            const val = arr[j++];
            newarr.push(val);
            y[i++].innerHTML=val;
            pageFault++;
        }
        else
        {
            y = document.getElementsByClassName('divstyle');
            pageHit++;
            y[index].classList.toggle('newcolor');
            await sleep(1.5);
            y[index].classList.toggle('newcolor');
            await sleep(0.5);
            j++;
        }
        await sleep(2);
    }
    
    while(i<x)
    {
        const node = document.createElement('div');
        node.classList.add('divstyle');
        node.classList.add('fade-div');
        document.getElementById('container').appendChild(node);
        y = document.getElementsByClassName('divstyle');
        y[i].innerHTML="";
        i++;
        await sleep(1.5);
    }

    y = document.getElementsByClassName('divstyle');
    while(j<len)
    {
            let i=0;
            for(;i<x;i++)
            {
                if(y[i].innerHTML==arr[j])
                    break;
            }
            
            if(i == x)
            {
                let k=0;
                for( ; k<x;k++)
                {
                    if(y[k].innerHTML==arr[j-1])
                        break;
                }


                y[k].classList.add('rot');
                await sleep(2.6);
                y[k].classList.remove('rot');
                y[k].innerHTML = arr[j];
                await sleep(0.5);
                pageFault++;
            }
            else
            {
                pageHit++;
                y[i].classList.toggle('newcolor');
                await sleep(1.5);
                y[i].classList.toggle('newcolor');
                await sleep(0.5);
            }
        j++;
    }

    const ph = document.getElementById('ph');
    ph.innerHTML = "Page Hit = " + pageHit;
    const pf = document.getElementById('pf');
    pf.innerHTML = "Page Fault = " + pageFault;

}

async function sleep(seconds){
    return new Promise((resolve)=> setTimeout((resolve), seconds*1000));
}