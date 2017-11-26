// example of a test group
// note: all tests under the test directory are ran

describe('webdriver.io page', ()=> {

    it('All links should point to an exsiting page', ()=> {
        browser.url('http://webdriver.io')
        let links = browser.elements('a')

        for (let i=0; i < links.value.length; i++) {
          let link = links.value[i].ELEMENT,
              href = browser.elementIdAttribute(link,'href'),
              status = true

          console.log(href.value)

          fetch(href.value)
            .then( function(res){
            })
            .catch( function(err){
              status = false
            })

          expect(status).to.be.true;
        }
    });
});

