$( () => {
    
    let id = [
        'toggle', 'hide', 'show', 'slideDown', 'slideUp', 'slideToggle', 'fadeIn',
        'fadeOut', 'fadeToggle', 'fadeTo', 'animate', 'stop', 'toggleClass', 'hasClass',
        'removeClass', 'addClass', 'css', 'attr', 'removeAttr', 'prop', 'removeProp', 
        'after', 'before', 'insertAfter', 'insertBefore', 'append', 'prepend', 
        'appendTo', 'prependTo', 'html', 'replaceAll', 'replaceWith', 'clone', 
        'empty', 'detach', 'remove', 'text', 'val', 'height', 'width', 'innerWidth', 
        'innerHeight', 'outerHeight', 'outerWidth', 'offset', 'position', 'offsetParent', 
        'scrollLeft', 'scrollTop', 'wrap', 'wrapAll', 'unwrap', 'wrapInner',
        'parent', 'parents', 'parentsUntil', 'children', 'find', 'siblings', 'next', 'nextAll', 
        'nextUntil', 'prev', 'prevAll', 'prevUntil', 'first', 'last',  'eq', 'filter',  'not', 'load',
        'get'
    ];
    
    let color = [
        'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'
    ];

    log = ($log) => {
      console.log($log);
    }

    let ba = $('.button-area');
    let input = $('input');
    let anim = $('#animation');
    let scroll = $('.scroll');
    
    $no = 0; 
    while($no < id.length)
    {
        let noRandom = Math.floor(Math.random() * 7);
        $('.tengah').css('margin', '0 0 0 9%');
        let button = "<button id='" + id[$no] + "' class='btn col-md-2 btn-outline-"+ color[noRandom] +" mr-1 mb-1'>"+ id[$no] +"</button>"
        ba.append(button);
        if( id[$no] == 'offsetParent' || id[$no] == 'post') {
          $("#"+id[$no]).attr('style', 'background-color: grey; color: black; opacity: 0.3;').prop('disabled', true);
        }
        $no++;
    }

    // calback dan speed tidak berfungsi
    // semua slide tidak bisa

    let h1 = $('h1');

    $('#toggle').click( () => {
        h1.toggle(1500, () => {
            log('toggle clicked');
          });
    })

    $("#hide").click( () => {
        $("h1").hide("slow", function(){
            log('callback clicked');
          });
    })

    $('#show').click( () => {
        h1.show(1500, () => {
            log('show clicked');
          });
    });

    $('#slideToggle').click( () => {
        $('#slide').slideToggle(1500, () => {
            log('slideToggle clicked');
          });
    });

    $('#slideUp').click( () => {
        $('#slide').slideUp(1500, () => {
            log('slideUp clicked');
          });
    });

    $('#slideDown').click( () => {
        $('#slide').slideDown(1500, () => {
            log('slideDown clicked');
          });
    });

    $('#fadeIn').click( () => {
        h1.fadeIn(1500, () => {
            log('fadeIn clicked');
          });
    });

    $('#fadeOut').click( () => {
        h1.fadeOut(1500, () => {
            log('fadeOut clicked');
          });
    });

    $('#fadeToggle').click( () => {
        h1.fadeToggle(1500, () => {
            log('fadeToggle clicked');
          });
    });

    $('#fadeTo').click( () => {
        h1.fadeTo(1500, 0.1, () => {
            log('fadeTo clicked');
           });

        h1.fadeTo(1500, 0.6, () => {
             log('fadeTo clicked');
           });

        h1.fadeTo(1500, 0.1, () => {
            log('fadeTo clicked');
           });

        h1.fadeTo(1500, 1, () => {
            log('fadeTo clicked');
           });
    });

    $('#animate').click( () => {
      
      anim.css('text-align', 'center').css('background-color', 'red').animate({width: '60px'}, "slow")
      .animate({marginLeft: '90px', height: '90px'}, "slow").animate({width: '30px'}, 3000)
      .animate({width: '90px', height: '30px', marginTop: '90px'}, "slow").animate({width: '11a5px'}, "slow", () => {
        log('animate clicked');
        h1.css('font-size', '22px');
      });
    });

    $('#toggleClass').click( () => {
      h1.toggleClass('bg-primary');
      log('toggleClass clicked');
    });

    $('#hasClass').click( () => {
      log(h1.hasClass('bg-primary') + ' hasClass clicked');
    });    

    $('#removeClass').click( () => {
      if(  Boolean(h1.hasClass('bg-primary'))  ) {
        h1.removeClass('bg-primary');
        log('removeClass clicked');
      } else {
        log('class not found!');
      }
    });    

    $('#addClass').click( () => {
      h1.addClass('bg-danger');
      log('addClass clicked');
    });

    $('#css').click( () => {
      h1.css({'background-color':'yellow', 'color':'red'});
      log('css clicked');
    });

    $('#attr').click( () => {
      h1.attr('style', 'color: blue; background-color: red;');
      log('attr clicked');
    });

    $('#removeAttr').click( () => {
      h1.removeAttr('style');
      log('removeAttr clicked');
    });

    //  BELUM BISA PROPNYA

    $('#prop').click( () => {
      h1.prop('color', 'red');
      log('prop clicked');
    });
    
    // $('#removeProp').click( () => {
      //   h1.removeProp('style');
      //   log('removeProp clicked');
      // });

      // KENAPA KALAU DIKLIK AFTER , BEFORE , INSERTAFTER DLL . KETIKA DIKLIK ADDCLASS / TOMBOL TAMBAH CLASS & STYLE YANG BERUBAH CUMAN H1 YANG LAMA 1 DOANG
      
    $('#after').click( () => {
      h1.after('<h1>hellooo world</h1>');
      log('after clicked');
    });
    
    $('#before').click( () => {
      h1.before('<h1>hellooo world</h1>');
      log('before clicked');
    });
    
    $('#insertAfter').click( () => {
      $('<h1>hellooo world</h1>').insertAfter('h1');
      log('insertAfter clicked');
    });
    
    $('#insertBefore').click( () => {
      $('<h1>hellooo world</h1>').insertBefore('h1');
      log('insertBefore clicked');
    });
 
    $('#append').click( () => {
      h1.append('<h1>hellooo world</h1>');
      log('append clicked');
    });
    
    $('#prepend').click( () => {
      h1.prepend('<h1>hellooo world</h1>');
      log('prepend clicked');
    });

    $('#appendTo').click( () => {
      $('<h1>hellooo world</h1>').appendTo('h1');
      log('appendTo clicked');
    });

    $('#prependTo').click( () => {
      $('<h1>hellooo world</h1>').prependTo('h1');
      log('prependTo clicked');
    });
    
    $('#html').click( () => {
      h1.html('<h3>hello world</h3>');
      log('html clicked');
    });
    
    $('#replaceAll').click( () => {
      $('<h1 style="color: red;">hellooo world</h1>').replaceAll('h1');
      log('replaceAll clicked');
    });
    
    $('#replaceWith').click( () => {
      h1.replaceWith('<h4>hello world</h4>');
      log('replaceWith clicked');
    });
    
    $('#clone').click( () => {
      h1.clone().prependTo('h2');
      log('clone clicked');
    });

    $('#empty').click( () => {
      h1.empty();
      log('empty clicked');
    });
    
    $('#detach').click( () => {
      h1.detach();
      log('detach clicked');
    });
    
    $('#remove').click( () => {
      h1.remove();
      log('remove clicked');
    });
    
    $('#text').click( () => {
      h1.text('hello gengs');
      let text = h1.text();
      log('text clicked ' + text);
    });
    
    $('#val').click( () => {
      input.val('hello world');
      log('val clicked ');
    });
    
    $('#height').click( () => {
      anim.height(200);
      log('height clicked ');
    });
    
    $('#width').click( () => {
      anim.width(90);
      log('width clicked ');
    });
    
    $('#innerWidth').click( () => {
      anim.innerWidth(90);
      log('innerWidth clicked ');
    });
    
    $('#innerHeight').click( () => {
      anim.innerHeight(200);
      log('innerHeight clicked ');
    });
    
    $('#outerWidth').click( () => {
      anim.outerWidth(200);
      log('outerWidth clicked ');
    });
    
    $('#outerHeight').click( () => {
      anim.outerHeight(200);
      log('outerHeight clicked ');
    });
    
    $('#offset').click( () => {
      anim.offset({top: 200, left: 200});
      let offset = anim.offset();
      log('offset clicked ' + offset.top + ' ' + offset.left + ' ' + offset.buttom + ' ' + offset.right);
    });
    
    $('#position').click( () => {
      let position = anim.position();
      log('position clicked ' + position.top + ' ' + position.left + ' ' + position.buttom + ' ' + position.right);
    });
    
    $('#offsetParent').click( () => {
      let offsetParent = anim.offsetParent();
      log('offsetParent clicked ' + offsetParent.top + ' ' + offsetParent.left + ' ' + offsetParent.buttom + ' ' + offsetParent.right);
    });
    
    $('#scrollLeft').click( () => {
      scroll.scrollLeft(5000);
      log('scrollLeft clicked ');
    });
    
    $('#scrollTop').click( () => {
      $('.scroll1').scrollTop(200);
      log('scrollTop clicked ');
    });
    
    $('#wrap').click( () => {
      $("h3").wrap("<i></i>");
      log('wrap clicked ');
    });
    
    $('#wrapAll').click( () => {
      $("h3").wrapAll("<del></del>");
      log('wrapAll clicked ');
    });
    
    $('#unwrap').click( () => {
      $("h3").unwrap();
      log('unwrap clicked ');
    });

    $('#wrapInner').click( () => {
      $("h3").wrapInner('<b></b>');
      log('wrapInner clicked ');
    });
    
    $('#parent').click( () => {
      h1.parent().css({"border": "2px solid red"})
      log('parent clicked ');
    });
    
    $('#parents').click( () => {
      h1.parents().css({"border": "2px solid red"})
      log('parents clicked ');
    });
    
    $('#parentsUntil').click( () => {
      h1.parentsUntil('span').css({"border": "2px solid red"})
      log('parentsUntil clicked ');
    });
    
    $('#children').click( () => {
      anim.children().css({"border": "2px solid red"})
      log('children clicked ');
    });
    
    $('#find').click( () => {
      anim.find('input').css({"border": "2px solid red"})
      log('find clicked ');
    });
    
    $('#siblings').click( () => {
      h1.siblings().css({"border": "2px solid red"})
      log('siblings clicked ');
    });
    
    $('#next').click( () => {
      h1.next().css({"border": "2px solid red"})
      log('next clicked ');
    });
    
    $('#nextAll').click( () => {
      h1.nextAll().css({"border": "2px solid red"})
      log('nextAll clicked ');
    });
    
    $('#nextUntil').click( () => {
      h1.nextUntil('input').css({"border": "2px solid red"})
      log('nextUntil clicked ');
    });
    
    $('#first').click( () => {
      h1.first().css({"border": "2px solid red"})
      log('first clicked ');
    });
    
    $('#last').click( () => {
      h1.last().css({"border": "2px solid red"})
      log('last clicked ');
    });
    
    $('#eq').click( () => {
      $('div').eq(2).css({"border": "2px solid red"})
      log('eq clicked ');
    });
    
    $('#filter').click( () => {
      $('div').filter('#animation').css({"border": "2px solid red"})
      log('filter clicked ');
    });
    
    $('#not').click( () => {
      $('div').not('#animation').css({"border": "2px solid red"})
      log('not clicked ');
    });
    
    $('#load').click( () => {
      anim.load('test.html', (responseText, statusTxt, xhr) => {
        
        if(statusTxt == "success") {
          log("succes load file external");
        }
        if(statusTxt == "error") {
          log("Error: " + xhr.status + ": " + xhr.statusText);
        }
      
      });
      log('load clicked ');
    });
    
    $('#get').click( () => {
      $.get('https://api.kawalcorona.com/indonesia', (data, status) => {
        // anim.append(data);
        log(data + ' , ' + status);
      });
      log('get clicked ');
    });






    $('#post').click( function(e) {
      e.preventDefault();  
      let nama = $('#name').val();
      let rt = $('#rt').val();
      let rw = $('#rw').val();
      
      $.post('post.php', { nama: nama, rt: rt, rw: rw }, (data, status) => {
        log(data + ' - ' + status); 
      })
    });




    // $.ajax({
    //   method: 'post',
    //   data: { name: name, rt: rt, rw: rw },
    //   url: '../../javascript/jquery/post.php',
    //   success: function(res){
    //     console.log('tes')
    //   } 
    // })












  });