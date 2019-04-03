<script>
var type = document.querySelector('[class="sc-cCVOAp iJxNw"]').querySelector('[class="sc-bZQynM fyNcxT"]').textContent;
var name = document.querySelector('[class="sc-cCVOAp iJxNw"]').querySelector('[class="sc-kpOJdX bcVGiM"]').textContent;
var price = document.querySelectorAll('[data-e2e-id="viewerCarPrice"]')[0].textContent;
var color = document.querySelector('[class="sc-hycgNl eRirMG"]').querySelectorAll('[class="sc-bZQynM kvWUsZ"]')[0].textContent;
var fuel = document.querySelector('[name="CarOverview"]').querySelectorAll('[class="sc-feJyhm gxkbld"]')[0].querySelector('[class="sc-bZQynM eDZvpc"]').textContent;
var gearbox = document.querySelector('[name="CarOverview"]').querySelectorAll('[class="sc-feJyhm gxkbld"]')[1].querySelector('[class="sc-bZQynM eDZvpc"]').textContent;
var engine = document.querySelector('[name="CarOverview"]').querySelectorAll('[class="sc-feJyhm gxkbld"]')[2].querySelector('[class="sc-bZQynM eDZvpc"]').textContent;
var category = document.querySelector('[name="CarOverview"]').querySelectorAll('[class="sc-feJyhm gxkbld"]')[3].querySelector('[class="sc-bZQynM eDZvpc"]').textContent;
var averageconsumption = document.querySelector('[name="CarOverview"]').querySelectorAll('[class="sc-feJyhm gxkbld"]')[4].querySelector('[class="sc-bZQynM eDZvpc"]').textContent;
var CO2emissions = document.querySelector('[name="CarOverview"]').querySelectorAll('[class="sc-feJyhm gxkbld"]')[5].querySelector('[class="sc-bZQynM eDZvpc"]').textContent;
var Fiscalpower = document.querySelector('[name="CarOverview"]').querySelectorAll('[class="sc-feJyhm gxkbld"]')[6].querySelector('[class="sc-bZQynM eDZvpc"]').textContent;
var power = document.querySelector('[name="CarOverview"]').querySelectorAll('[class="sc-feJyhm gxkbld"]')[7].querySelector('[class="sc-bZQynM eDZvpc"]').textContent;
  
var Deliverytime = document.querySelector('[name="CarOverview"]').querySelectorAll('[class="sc-feJyhm gxkbld"]')[8].querySelector('[class="sc-bZQynM eDZvpc"]').textContent;
window.dataLayer.push({
 'ecommerce': {
  'productdetails': {
   'Products': [{
 'type': type,
 'name': name,
 'category': category,
 'price':price,
  'fuel':fuel,
  'gearbox':gearbox,
  'engine':engine,
  'color':color,
  'averageconsumption':averageconsumption,
  'CO2emissions':CO2emissions,
   'Fiscalpower': Fiscalpower,
  'power':power,
  'Deliverytime':Deliverytime
 }]
  }
 }
});
</script>
