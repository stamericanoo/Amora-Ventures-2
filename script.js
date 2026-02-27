const cashCtx = document.getElementById('cashChart');
if (cashCtx) {
new Chart(cashCtx, {
type: 'line',
data: {
labels: ['Year 0','1','2','3','4','5','6','7','8','9','10'],
datasets: [{
label: 'Cumulative Cashflow (Billion IDR)',
data: [-1127, -1017, -907, -797, -687, -577, -467, -357, -247, -137, -27],
borderColor:'#5B0F19',
fill:false,
tension:0.3
}]
}
});
}

const bepCtx = document.getElementById('bepChart');
if (bepCtx) {
new Chart(bepCtx, {
type:'line',
data:{
labels:['0','50k','100k','150k','184k','250k','330k'],
datasets:[
{
label:'Total Cost (Billion IDR)',
data:[0,200,350,480,540,600,650],
borderColor:'#8B1E2D',
fill:false
},
{
label:'Revenue (Billion IDR)',
data:[0,100,200,300,368,500,660],
borderColor:'#5B0F19',
fill:false
}
]
}
});
}
