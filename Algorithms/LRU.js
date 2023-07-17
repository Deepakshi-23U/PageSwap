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
    const arr= s.split(' ').map(Number);
    const newarr=[];
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
            await sleep(2);
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
        await sleep(1);
    }
    y = document.getElementsByClassName('divstyle');
    while(j<len)
    {
            var index = newarr.indexOf(arr[j]);
            if(index ==-1)
            {
                let temp = newarr[0];
                newarr.splice(0,1);
                newarr.push(arr[j]);
                
                for(let i=0;i<x;i++)
                {
                    if(y[i].innerHTML==temp)
                    {   
                        y[i].classList.add('rot');
                        await sleep(2.6);
                        y[i].classList.remove('rot');
                        y[i].innerHTML = arr[j];
                        await sleep(0.5);
                    }
                }

                pageFault++;
            }
            else
            {
                newarr.splice(index,1);
                newarr.push(arr[j]);
                for(let i=0;i<x;i++)
                {
                    if(y[i].innerHTML==arr[j])
                    {
                        y[i].classList.toggle('newcolor');
                        await sleep(1.5);
                        y[i].classList.toggle('newcolor');
                        await sleep(0.5);
                    }
                }
                pageHit++;
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