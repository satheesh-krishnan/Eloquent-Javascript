<script>

  function buildTable() {
    var tab=document.createElement('table')
    var ro=document.createElement('tr')
    var nam=document.createElement('td')
    var het=document.createElement('td')
    var con=document.createElement('td')
    nam.appendChild(document.createTextNode('NAME'))
    het.appendChild(document.createTextNode('HEIGHT'))
    con.appendChild(document.createTextNode('PLACE'))
    ro.appendChild(nam)
    ro.appendChild(het)
    ro.appendChild(con)
    tab.appendChild(ro)
//    var real=Array.prototype.slice.call(data,0)
//    real.forEach(function(mon){
    return tab
    
  }
//  var MOUNTAINS={0:["KILI",5432,"TANZ"],1:["EVE",8746,"NEP"]}
  buildTable()
</script>
