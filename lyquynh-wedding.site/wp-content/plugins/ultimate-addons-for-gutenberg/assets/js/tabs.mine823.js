UAGBTabs={init(a){const t=document.querySelector(a);var e=t.getAttribute("data-tab-active");const b=t.querySelectorAll(".uagb-tabs__panel > li.uagb-tab"),s=t.querySelectorAll(".uagb-tabs__body-container");s[e].classList.add("uagb-tabs-body__active"),b[e].classList.add("uagb-tabs__active");for(let t=0;t<b.length;t++){const r=b[t].getElementsByTagName("a")[0];b[t].setAttribute("id","uagb-tabs__tab"+t),r.setAttribute("aria-selected",!0),b[t].classList.contains("uagb-tabs__active")||r.setAttribute("aria-selected",!1),r.setAttribute("data-tab",t),r.mainWrapClass=a,r.addEventListener("click",function(t){UAGBTabs.tabClickEvent(t,this,this.parentElement)})}},tabClickEvent(t,a,e){t.preventDefault();var t=t.currentTarget.mainWrapClass,b=a.getAttribute("data-tab");const s=e.closest(".uagb-tabs__panel"),r=document.querySelector(t+" > .uagb-tabs__body-wrap > .uagb-inner-tab-"+b),i=document.querySelectorAll(t+" > .uagb-tabs__body-wrap > .uagb-tabs__body-container:not(.uagb-inner-tab-"+b+")"),u=s.querySelectorAll("a.uagb-tabs-list");s.querySelector(".uagb-tabs__active").classList.remove("uagb-tabs__active"),document.querySelector(t+" > .uagb-tabs__body-wrap > .uagb-tabs-body__active").classList.remove("uagb-tabs-body__active");for(let t=0;t<u.length;t++)u[t].setAttribute("aria-selected",!1);e.classList.add("uagb-tabs__active"),a.setAttribute("aria-selected",!0),r.classList.add("uagb-tabs-body__active"),r.setAttribute("aria-hidden",!1);for(let t=0;t<i.length;t++)i[t].setAttribute("aria-hidden",!0)},anchorTabId(t){const a=window.location.hash;if(""!==a&&/^#uagb-tabs__tab\d$/.test(a)){var e=escape(a.substring(1));const b=document.querySelector("#"+e);e=b.getBoundingClientRect().top+window.pageYOffset,e=(window.scrollTo({top:e,behavior:"smooth"}),b.querySelector("a.uagb-tabs-list").getAttribute("data-tab"));const s=b.closest(".uagb-tabs__panel"),r=document.querySelector(t+" > .uagb-tabs__body-wrap > .uagb-inner-tab-"+e),i=document.querySelectorAll(t+" > .uagb-tabs__body-wrap > .uagb-tabs__body-container:not(.uagb-inner-tab-"+e+")"),u=b.querySelectorAll("a.uagb-tabs-list"),c=b.querySelector("a.uagb-tabs-list");s.querySelector(".uagb-tabs__active").classList.remove("uagb-tabs__active"),document.querySelector(t+" > .uagb-tabs__body-wrap > .uagb-tabs-body__active").classList.remove("uagb-tabs-body__active");for(let t=0;t<u.length;t++)u[t].setAttribute("aria-selected",!1);b.classList.add("uagb-tabs__active"),c.setAttribute("aria-selected",!0),r.classList.add("uagb-tabs-body__active"),r.setAttribute("aria-hidden",!1);for(let t=0;t<i.length;t++)i[t].setAttribute("aria-hidden",!0)}}};