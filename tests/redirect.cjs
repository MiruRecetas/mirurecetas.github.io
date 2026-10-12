const {chromium}=require('playwright');
const assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({headless:true});
 try{
  for(const width of [390,820,1440])for(const javaScriptEnabled of [true,false]){
   const context=await browser.newContext({javaScriptEnabled,viewport:{width,height:900}});
   const page=await context.newPage();
   const response=await page.goto('http://127.0.0.1:8765/?origen=raiz#menus');
   await page.waitForURL(u=>u.origin==='https://mirurecetas.github.io'&&u.pathname==='/menu-anual-recetas/');
   const title=page.getByRole('heading',{name:'¿Qué cocinamos esta semana?',exact:true});
   await title.waitFor();
   if(javaScriptEnabled){
    assert.equal(new URL(page.url()).search,'?origen=raiz');
    assert.equal(new URL(page.url()).hash,'#menus');
    await page.locator('#week .week-card').first().waitFor();
   }
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2));
   console.log('PASS',width,'JavaScript:',javaScriptEnabled,'abre MiruRecetas');
   await context.close();
  }
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exit(1)});
