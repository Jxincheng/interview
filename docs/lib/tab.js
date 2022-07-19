! function() {
  var a = "transition: opacity 250ms ease-in-out 0s;animation: 250ms ease-in-out 0s 1 normal none running nav-fadein;",
    hd = "height: 0; display: none",
    i,u;
    
  
  
  function tab() {
    let h = `<span class="text-gray"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class="text-trans text-rotate-90" style="min-width: 20px; min-height: 20px;"><g fill="none" fill-rule="evenodd" transform="translate(-446 -398)"><path fill="currentColor" fill-rule="nonzero" d="M95.8838835,240.366117 C95.3957281,239.877961 94.6042719,239.877961 94.1161165,240.366117 C93.6279612,240.854272 93.6279612,241.645728 94.1161165,242.133883 L98.6161165,246.633883 C99.1042719,247.122039 99.8957281,247.122039 100.383883,246.633883 L104.883883,242.133883 C105.372039,241.645728 105.372039,240.854272 104.883883,240.366117 C104.395728,239.877961 103.604272,239.877961 103.116117,240.366117 L99.5,243.982233 L95.8838835,240.366117 Z" transform="translate(356.5 164.5)"></path><polygon points="446 418 466 418 466 398 446 398"></polygon></g></svg></span>`,
      p = Docsify.dom.findAll(i, "p");
    p.forEach(function(e,i) {
      e.innerHTML = e.innerHTML + h;
      let la = Docsify.dom.find(e.nextElementSibling, "li.active")
      if (la) {
        let t = e.firstElementChild;
        Docsify.dom.toggleClass(t, "text-link");
        Docsify.dom.toggleClass(t.firstElementChild, "text-rotate-90")
        Docsify.dom.toggleClass(t.firstElementChild, "text-rotate-0")
        e.setAttribute("style", "color: #087ea4")
        e.nextSibling.setAttribute("class", "opacity-100")
        e.nextSibling.style = a
      } else {
        e.nextSibling.style = a + hd, e.nextSibling.setAttribute("class", "opacity-50")
      }
  
      Docsify.dom.on(e, "click", function(e) {
        let t, d, n;
        if (e.target.tagName == 'P') {
          t = e.target.firstElementChild, d = t.firstElementChild, n = e.target.nextSibling
        } else if (e.target.tagName == 'SPAN') {
          t = e.target, d = t.firstElementChild, n = t.parentElement.nextSibling
        } else if (e.target.tagName == 'svg') {
          d = e.target, t = d.parentElement, n = t.parentElement.nextSibling
        } else if (e.target.tagName == 'path') {
          d = e.target.parentElement.parentElement, t = d.parentElement, n = t.parentElement.nextSibling
        }
        // Docsify.dom.toggleClass(t, "text-link")
        Docsify.dom.toggleClass(d, "text-rotate-90")
        Docsify.dom.toggleClass(d, "text-rotate-0")
        if (n.getAttribute('class') == "opacity-100") {
          n.setAttribute("class", "opacity-50")
          n.style = a + hd
        } else {
          n.setAttribute("class", "opacity-100")
          n.style = a
        }
      })
    }) 
  }
  function L(t) {
    let ti = Docsify.dom.findAll(".tab-item"); 
    ti.forEach(function(ix,x) {
      Docsify.dom.on(ix, "click", function(e) {
        let ac = Docsify.dom.find(t, '.active')
        ac && ac.setAttribute('class', 'tab-item'), e.target.setAttribute('class', 'tab-item active'), sessionStorage.setItem('nav', x)
      })
    })
  }
  function N() {
    let t = Docsify.dom.create("nav"), nt = Docsify.dom.find("nav.tab");
    if (!nt) {
      var r = '', ni = sessionStorage.getItem('nav') || 0;
      b.navTab.forEach(function(i,x) {
        r += `<a class="tab-item${x==ni?" active":''}" href="#/${i.link}">${i.title}</a>`
      })
      t.innerHTML = r, Docsify.dom.toggleClass(t, "tab"), i.parentElement.insertBefore(t, i) 
    }
    L(t)
  }
  function G(n) {
    Docsify.get('_navbar.md').then(res => {
      let data = n.compiler.compile(res)
    })
  }
  var b = {
    navTab: [
      { title: 'tab1', link: 'README', key: '' },
      { title: 'tab2', link: 'README', key: 'tab2' }
    ],
    tabList: []
  }
  $docsify.plugins = [].concat(function(e, n) {
    var c = n.config;
    b.navTab = c.navTab || b.navTab
    e.mounted(function(e) {
    
    }), e.doneEach(function(e) {
      i = Docsify.dom.find(".sidebar-nav"), u = i.children
      tab()
      // G(n)
    }), e.ready(function(e) {
      N()
    })
  } , $docsify.plugins)
}();