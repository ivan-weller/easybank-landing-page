function latestArticles(e){var a="";$.each(e,(function(e,t){a+='<article><div class="thumbnail" style="background-image: url(',a+=t.thumbnail,a+=')"></div><div class="details"><span rel="author">By ',a+=t.author,a+='</span><a href="#"><h2>',a+=t.title,a+="</h2></a><p>",a+=t.content,a+="</p></div></article>"})),$(".latest-articles").html(a)}$(".menu").click((function(){$("nav").fadeToggle(50),$(".overlay").fadeToggle(200),$(".menu").toggleClass("close"),$("body").toggleClass("hide-overflow")})),$((function(){$.ajax({type:"GET",url:"articles.json",async:!1,beforeSend:function(){},dataType:"json",success:function(e){latestArticles(e)}})}));