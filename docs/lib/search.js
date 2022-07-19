! function() {
  var u = {},
      m = {
          EXPIRE_KEY: "docsify.search.expires",
          INDEX_KEY: "docsify.search.index"
      };

  function p(e) {
      var n = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
      };
      return String(e).replace(/[&<>"']/g, function(e) {
          return n[e]
      })
  }

  function h(e) {
      return e.text || "table" !== e.type || (e.cells.unshift(e.header), e.text = e.cells.map(function(e) {
          return e.join(" | ")
      }).join(" |\n ")), e.text
  }

  function f(e) {
      return e.text || "list" !== e.type || (e.text = e.raw), e.text
  }

  function g(i, e, r, o) {
      void 0 === e && (e = "");
      var s, e = window.marked.lexer(e),
          c = window.Docsify.slugify,
          d = {},
          l = "";
      return e.forEach(function(e, n) {
          if ("heading" === e.type && e.depth <= o) {
              var t = function(e) {
                      void 0 === e && (e = "");
                      var a = {};
                      return {
                          str: e = e && e.replace(/^('|")/, "").replace(/('|")$/, "").replace(/(?:^|\s):([\w-]+:?)=?([\w-%]+)?/g, function(e, n, t) {
                              return -1 === n.indexOf(":") ? (a[n] = t && t.replace(/&quot;/g, "") || !0, "") : e
                          }).trim(),
                          config: a
                      }
                  }(e.text),
                  a = t.str,
                  t = t.config;
              s = t.id ? r.toURL(i.path, {
                  id: c(t.id)
              }) : r.toURL(i.path, {
                  id: c(p(e.text))
              }), a && (l = a.replace(/<!-- {docsify-ignore} -->/, "").replace(/{docsify-ignore}/, "").replace(/<!-- {docsify-ignore-all} -->/, "").replace(/{docsify-ignore-all}/, "").trim()), d[s] = {
                  slug: s,
                  title: l,
                  body: "",
                  directory: i
              }
          } else {
              if (0 === n && (s = r.toURL(i.path), d[s] = {
                      slug: s,
                      title: "/" !== i.path ? i.path.slice(1) : "Home Page",
                      body: e.text || "",
                      directory: i
                  }), !s) return;
              d[s] ? d[s].body ? (e.text = h(e), e.text = f(e), d[s].body += "\n" + (e.text || "")) : (e.text = h(e), e.text = f(e), d[s].body = d[s].body ? d[s].body + e.text : e.text) : d[s] = {
                  slug: s,
                  title: "",
                  body: "",
                  directory: i
              }
          }
      }), c.clear(), d
  }

  function y(e) {
      return e && e.normalize ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : e
  }

  function r(i, r) {
      var t, a,ra, n, e, o = "auto" === i.paths,
          s = o ? (t = r.router, a = [],ra=[], Docsify.dom.findAll(".sidebar-nav a:not(.section-link):not([data-nosearch])").forEach(function(e) {
              var n = e.href,
                  re = e,
                  e = e.getAttribute("href"),
                  n = t.parse(n).path,
                  ri = re.parentElement.parentElement.parentElement.firstElementChild;
              n && -1 === a.indexOf(n) && !Docsify.util.isAbsolutePath(e) && a.push(n),ra.push({path: n, title: re.innerText, source: ri.innerText})
          }), a) : i.paths,
          c = "";
      s.length && o && i.pathNamespaces ? (n = s[0], Array.isArray(i.pathNamespaces) ? c = i.pathNamespaces.filter(function(e) {
          return n.slice(0, e.length) === e
      })[0] || c : i.pathNamespaces instanceof RegExp && ((d = n.match(i.pathNamespaces)) && (c = d[0])), e = -1 === s.indexOf(c + "/"), d = -1 === s.indexOf(c + "/README"), e && d && s.unshift(c + "/")) : -1 === s.indexOf("/") && -1 === s.indexOf("/README") && s.unshift("/");
      var d, l = ((d = i.namespace) ? m.EXPIRE_KEY + "/" + d : m.EXPIRE_KEY) + c,
          p = ((d = i.namespace) ? m.INDEX_KEY + "/" + d : m.INDEX_KEY) + c,
          c = localStorage.getItem(l) < Date.now();
      if (u = JSON.parse(localStorage.getItem(p)), c) u = {};
      else if (!o) return;
      var h = s.length,
          f = 0;
      s = ra;
      s.forEach(function(a) {
          return u[a.path] ? f++ : void Docsify.get(r.router.getFile(a.path), !1, r.config.requestHeaders).then(function(e) {
              var n, t;
              u[a.path] = g(a, e, r.router, i.depth), h === ++f && (n = i.maxAge, t = l, e = p, localStorage.setItem(t, Date.now() + n), localStorage.setItem(e, JSON.stringify(u)))
          })
      })
  }
  var o, s = "";

  function c(e) {
      var n = Docsify.dom.find("div.search"),
          t = Docsify.dom.find(n, ".results-panel"),
          a = Docsify.dom.find(n, ".clear-button"),
          rz = Docsify.dom.find(".doc-search-reset"),
          rt = Docsify.dom.find(".doc-search-dropdown")
          i = Docsify.dom.find(".sidebar-nav"),
          n = Docsify.dom.find(".app-name");
      if (!e && b.theme == "react") return rz&&rz.setAttribute("hidden", ''), rt.innerHTML = `<div class="doc-search-startScreen"><p class="doc-search-help">No recent searches</p></div>`;
      if (!e && b.theme == "vue") return t.classList.remove("show"), a.classList.remove("show"), t.innerHTML = "", void(o.hideOtherSidebarContent && (i && i.classList.remove("hide"), n && n.classList.remove("hide")));
          var e = function(e) {
              var n = [],
              t = [];
              Object.keys(u).forEach(function(n) {
                  t = t.concat(Object.keys(u[n]).map(function(e) {
                      return u[n][e]
                    }))
                });
                var a = (e = e.trim()).split(/[\s\-，\\/]+/);
                1 !== a.length && (a = [].concat(e, a));
                for (var i = 0; i < t.length; i++) ! function(e) {
                  var e = t[e],
                      r = 0,
                      o = "",
                      s = "",
                      c = "",
                      d = e.title && e.title.trim(),
                      l = e.body && e.body.trim(),
                      rd = e.directory,
                      e = e.slug || "";
                  d && (a.forEach(function(e) {
                      var n, t = new RegExp(p(y(e)).replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"), "gi"),
                          a = -1,
                          i = -1;
                      s = d ? p(y(d)) : d, c = l ? p(y(l)) : l, a = d ? s.search(t) : -1, i = l ? c.search(t) : -1, (0 <= a || 0 <= i) && (r += 0 <= a ? 3 : 0 <= i ? 2 : 0, i < 0 && (i = 0), a = (a = n = 0) == (n = i < 11 ? 0 : i - 10) ? 70 : i + e.length + 60, l && a > l.length && (a = l.length), t = "..." + c.substring(n, a).replace(t, function(e) {
                          return '<em class="search-keyword">' + e + "</em>"
                      }) + "...", o += t)
                  }), 0 < r && (e = {
                      title: s,
                      content: l ? o : "",
                      url: e,
                      score: r,
                      directory: rd
                  }, n.push(e)))
              }(i);
              return b.theme == 'react' ? n : n.sort(function(e, n) {
                  return n.score - e.score
              })
          }(e),
          r = "";
      function re(s, g) {
        var rs = '';
        e.forEach(function(e) {
            e.directory.source == s && (rs += `<li class="doc-search-hit" role="option" aria-selected="false"><a href="#${e.directory.path}"><div class="doc-search-hit-container"><div class="doc-search-hit-icon"><svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg></div><div class="doc-search-hit-content-wrapper"><span class="doc-search-hit-title">${e.directory.title}</span></div><div class="doc-search-hit-action"><svg class="doc-search-hit-select-icon" width="20" height="20" viewBox="0 0 20 20"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v4c0 2-2 4-4 4H2"></path><path d="M8 17l-6-6 6-6"></path></g></svg></div></div></a></li>`)
        })
        return rs;
      }
      if(b.theme == 'react') {
        var rd = [], rs;
        e.forEach(function(e) {
            !rd.includes(e.directory.source) && rd.push(e.directory.source)
        })
        rd.forEach(function(e) {
            r += `<section class="doc-search-hits"><div class="doc-search-hit-source">${e}</div><ul role="listbox">${re(e)}</ul></section>`
        })
        rt.innerHTML = r || '<div class="doc-search-startScreen"><p class="doc-search-help">No recent searches</p></div>', rz && rz.removeAttribute("hidden"), rs = Docsify.dom.findAll(rt, "li.doc-search-hit"),ar=[], 
        rs.forEach(function(it,i) {
            Docsify.dom.on(it, "mouseover", function(e) {
            if(ar[i] == 1) return
            let io = ar.indexOf(1)
            if ( io == -1) {
                ar[i] = 1
                rs[i].setAttribute('aria-selected', true)
            } else if (io !== i) {
                ar[io] = 0, ar[i] = 1
                rs[io].setAttribute('aria-selected', false)
                rs[i].setAttribute('aria-selected', true)
            }
          })
        })
      }
      if (b.theme == 'vue') {
        e.forEach(function(e) {
          r += '<div class="matching-post">\n<a href="' + e.url + '">\n<h2>' + e.title + "</h2>\n<p>" + e.content + "</p>\n</a>\n</div>"
        }), t.classList.add("show"), a.classList.add("show"), t.innerHTML = r || '<p class="empty">' + s + "</p>", o.hideOtherSidebarContent && (i && i.classList.add("hide"), n && n.classList.add("hide"))
      }
  }

  function d(e) {
      o = e
  }

  function l(e, n) {
      var t, a, i = n.router.parse().query.s;
      d(e), Docsify.dom.style("\n.sidebar {\n  padding-top: 0;\n}\n\n.search {\n  padding: 6px 12px;\n  border-bottom: 1px solid #eee;\n}\n\n.search .input-wrap {\n  display: flex;\n  align-items: center;\n}\n\n.search .results-panel {\n  display: none;\n}\n\n.search .results-panel.show {\n  display: block;\n}\n\n.search input {\n  outline: none;\n  border: none;\n  width: 100%;\n  padding: 0 7px;\n  line-height: 36px;\n  font-size: 14px;\n  border: 1px solid transparent;\n  background: #ebecf0;\n  border-radius: 0.5rem;\n}\n\n.search input:focus {\n  box-shadow: 0 0 5px var(--search-color, #42b983);\n  border: 1px solid var(--search-color, #42b983);\n}\n\n.search input::-webkit-search-decoration,\n.search input::-webkit-search-cancel-button,\n.search input {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.search .clear-button {\n  cursor: pointer;\n  width: 36px;\n  text-align: right;\n  display: none;\n}\n\n.search .clear-button.show {\n  display: block;\n}\n\n.search .clear-button svg {\n  transform: scale(.5);\n}\n\n.search h2 {\n  font-size: 17px;\n  margin: 10px 0;\n}\n\n.search a {\n  text-decoration: none;\n  color: inherit;\n}\n\n.search .matching-post {\n  border-bottom: 1px solid #eee;\n}\n\n.search .matching-post:last-child {\n  border-bottom: 0;\n}\n\n.search p {\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n.search p.empty {\n  text-align: center;\n}\n\n.app-name.hide, .sidebar-nav.hide {\n  display: none;\n}"),
          function(e) {
              void 0 === e && (e = "");
              var n = '<div class="input-wrap">\n      <input type="search" value="' + e + '" aria-label="Search text" />\n      <div class="clear-button">\n        <svg width="26" height="24">\n          <circle cx="12" cy="12" r="11" fill="#ccc" />\n          <path stroke="white" stroke-width="2" d="M8.25,8.25,15.75,15.75" />\n          <path stroke="white" stroke-width="2"d="M8.25,15.75,15.75,8.25" />\n        </svg>\n      </div>\n    </div>\n    <div class="results-panel"></div>\n    </div>',
                  e = Docsify.dom.create("div", n),
                  n = Docsify.dom.find("aside");
              Docsify.dom.toggleClass(e, "search"), Docsify.dom.before(n, e)
          }(i), n = Docsify.dom.find("div.search"), a = Docsify.dom.find(n, "input"), e = Docsify.dom.find(n, ".input-wrap"), Docsify.dom.on(n, "click", function(e) {
            if (b.theme == "react") {
                a.blur()
                let rb = Docsify.dom.body,
                    rf = Docsify.dom.find(rb, ".doc-search"), ri,re;
                if (!rf) {
                    let rh = `<div class="doc-search-modal"><header class="doc-search-bar"><div class="doc-search-form"><label class="doc-search-label" for="docsearch-input" id="docsearch-label"><svg width="20" height="20" class="doc-search-icon" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg></label><input class="doc-search-input" aria-autocomplete="both" aria-labelledby="docsearch-label" id="docsearch-input" autocomplete="off" autocorrect="off" autocapitalize="off" enterkeyhint="search" spellcheck="false" placeholder="${b.placeholder}" maxlength="64" type="search" value="" /><button type="reset" title="Clear the query" class="doc-search-reset" hidden><svg width="20" height="20" viewBox="0 0 20 20"><path d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div></header><div class="doc-search-dropdown"><div class="doc-search-startScreen"><p class="doc-search-help">${b.noData}</p></div></div></div>`
                        rg = Docsify.dom.create("div", rh);
                    Docsify.dom.toggleClass(rb, "doc-search-active")
                    Docsify.dom.toggleClass(rg, "doc-search"), Docsify.dom.appendTo(rb, rg), ri = Docsify.dom.find(rg, "input"), ri.focus(), Docsify.dom.on(ri, "input", function(n) {
                        clearTimeout(t), t = setTimeout(function(e) {
                            return c(n.target.value.trim())
                        }, 100)
                    }), re = Docsify.dom.find(rg, ".doc-search-reset"), Docsify.dom.on(re, "click", function(e) {
                        ri.value = "", c()
                    })
                }
            }
            return -1 === ["A", "H2", "P", "EM"].indexOf(e.target.tagName) && e.stopPropagation()
          })
          if (b.theme == "vue") {
            Docsify.dom.on(a, "input", function(n) {
                clearTimeout(t), t = setTimeout(function(e) {
                    return c(n.target.value.trim())
                }, 100)
            }), Docsify.dom.on(e, "click", function(e) {
                "INPUT" !== e.target.tagName && (a.value = "", c())
            }), i && setTimeout(function(e) {
                return c(i)
            }, 500)
          }
          if (b.theme == "react") {
            Docsify.dom.on(Docsify.dom.$, "click", function(e) {
                let bd = Docsify.dom.body
                if (e.target.className == "doc-search") {
                    Docsify.dom.toggleClass(bd, "doc-search-active"), bd.removeChild(e.target)
                } else {
                    e.path.forEach(i => {
                        if (i.tagName == "A") {
                            let ds = Docsify.dom.find(bd, ".doc-search")
                            ds && (Docsify.dom.toggleClass(bd, "doc-search-active"), bd.removeChild(ds))
                        } 
                    })
                }
            })
          }   
  }

  function v(e, n) {
      var t, a, i, r, o;
      d(e), t = e.placeholder, a = n.route.path, (r = Docsify.dom.getNode('.search input[type="search"]')) && ("string" == typeof t ? r.placeholder = t : (i = Object.keys(t).filter(function(e) {
          return -1 < a.indexOf(e)
      })[0], r.placeholder = t[i])), e = e.noData, o = n.route.path, s = "string" == typeof e ? e : e[Object.keys(e).filter(function(e) {
          return -1 < o.indexOf(e)
      })[0]]
  }
  var b = {
      placeholder: "Search docs",
      noData: "No Results!",
      paths: "auto",
      depth: 2,
      theme: "react",
      maxAge: 864e5,
      hideOtherSidebarContent: !1,
      namespace: void 0,
      pathNamespaces: void 0
  };
  $docsify.plugins = [].concat(function(e, n) {
      var t = Docsify.util,
          a = n.config.search || b;
      Array.isArray(a) ? b.paths = a : "object" == typeof a && (b.paths = Array.isArray(a.paths) ? a.paths : "auto", b.maxAge = (t.isPrimitive(a.maxAge) ? a : b).maxAge, b.placeholder = a.placeholder || b.placeholder, b.noData = a.noData || b.noData, b.depth = a.depth || b.depth, b.theme = a.theme || b.theme, b.hideOtherSidebarContent = a.hideOtherSidebarContent || b.hideOtherSidebarContent, b.namespace = a.namespace || b.namespace, b.pathNamespaces = a.pathNamespaces || b.pathNamespaces);
      var i = "auto" === b.paths;
      e.mounted(function(e) {
          l(b, n), i || r(b, n)
      }), e.doneEach(function(e) {
          v(b, n), i && r(b, n)
      })
  }, $docsify.plugins)
}();