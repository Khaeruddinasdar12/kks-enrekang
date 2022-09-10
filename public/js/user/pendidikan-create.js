if(jenis_izin_old != null) {
  jenis(jenis_izin_old);
}
$('#tab1').submit(function(e){

  e.preventDefault();
  var request = new FormData(this);
  var endpoint= route1;
  $.ajax({
    url: endpoint,
    method: "POST",
    data: request,
    contentType: false,
    cache: false,
    processData: false,
    beforeSend: function(){
      $('#loader').attr("style", "");
    },
    success:function(data){
      berhasil(data.status, data.pesan);
    },
    complete:function(data) {
      $('#loader').attr("style", "display:none");
    },
    error: function(xhr, status, error){
      var error = xhr.responseJSON; 
      if ($.isEmptyObject(error) == false) {
        $.each(error.errors, function(key, value) {
          gagal(key, value);
        });
      }
    } 
  }); 
});

$('#tab2').submit(function(e){

  e.preventDefault();
  var request = new FormData(this);
  var endpoint= route2;
  $.ajax({
    url: endpoint,
    method: "POST",
    data: request,
    contentType: false,
    cache: false,
    processData: false,
    beforeSend: function(){
      $('#loader').attr("style", "");
    },
    success:function(data){
      berhasil(data.status, data.pesan);
    },
    complete:function(data) {
      $('#loader').attr("style", "display:none");
    },
    error: function(xhr, status, error){
      var error = xhr.responseJSON; 
      if ($.isEmptyObject(error) == false) {
        $.each(error.errors, function(key, value) {
          gagal(key, value);
        });
      }
    } 
  }); 
});

$('#tab3').submit(function(e) {
  e.preventDefault();
  var request = new FormData(this);
  var endpoint= route3;
  $.ajax({
    url: endpoint,
    method: "POST",
    data: request,
    contentType: false,
    cache: false,
    processData: false,
    beforeSend: function(){
      $('#loader').attr("style", "");
    },
    success:function(data){
      berhasil(data.status, data.pesan);
    },
    complete:function(data) {
      $('#loader').attr("style", "display:none");
    },
    error: function(xhr, status, error){
      var error = xhr.responseJSON; 
      if ($.isEmptyObject(error) == false) {
        $.each(error.errors, function(key, value) {
          gagal(key, value);
        });
      }
    } 
  }); 
});

// TAB 4

// UPLOAD KTP
$('#ktp').submit(function(e) {
  e.preventDefault();
  var request = new FormData(this);
  var endpoint= route4;
  $.ajax({
    url: endpoint,
    method: "POST",
    data: request,
    contentType: false,
    cache: false,
    processData: false,
    beforeSend: function(){
      $('#loader').attr("style", "");
    },
    success:function(data) {
      document.getElementById('ktp').reset();
      if(data.status == 'success') {
        reload(pendidikan_id, 'reload-ktp', 'ktp');
      }
      berhasil(data.status, data.pesan);
    },
    complete:function(data) {
      $('#loader').attr("style", "display:none");
    },
    error: function(xhr, status, error){
      var error = xhr.responseJSON; 
      if ($.isEmptyObject(error) == false) {
        $.each(error.errors, function(key, value) {
          gagal(key, value);
        });
      }
    } 
  }); 
  return false;
});
  // END UPLOAD KTP

  // UPLOAD FOTO
  $('#foto').submit(function(e) {
    e.preventDefault();
    var request = new FormData(this);
    var endpoint= route4;
    $.ajax({
      url: endpoint,
      method: "POST",
      data: request,
      contentType: false,
      cache: false,
      processData: false,
      beforeSend: function(){
        $('#loader').attr("style", "");
      },
      success:function(data) {
        document.getElementById('foto').reset();
        if(data.status == 'success') {
          reload(pendidikan_id, 'reload-foto', 'pas_foto');
        }
        berhasil(data.status, data.pesan);
      },
      complete:function(data) {
        $('#loader').attr("style", "display:none");
      },
      error: function(xhr, status, error){
        var error = xhr.responseJSON; 
        if ($.isEmptyObject(error) == false) {
          $.each(error.errors, function(key, value) {
            gagal(key, value);
          });
        }
      } 
    }); 
    return false;
  });
  // END UPLOAD FOTO

  // UPLOAD AKTA
  $('#akta').submit(function(e) {
    e.preventDefault();
    var request = new FormData(this);
    var endpoint= route4;
    $.ajax({
      url: endpoint,
      method: "POST",
      data: request,
      contentType: false,
      cache: false,
      processData: false,
      beforeSend: function(){
        $('#loader').attr("style", "");
      },
      success:function(data) {
        document.getElementById('akta').reset();
        if(data.status == 'success') {
          reload(pendidikan_id, 'reload-akta', 'akta');
        }
        berhasil(data.status, data.pesan);
      },
      complete:function(data) {
        $('#loader').attr("style", "display:none");
      },
      error: function(xhr, status, error){
        var error = xhr.responseJSON; 
        if ($.isEmptyObject(error) == false) {
          $.each(error.errors, function(key, value) {
            gagal(key, value);
          });
        }
      } 
    }); 
    return false;
  });
  // END UPLOAD AKTA

  // UPLOAD KURIKULUM
  $('#kurikulum').submit(function(e) {
    e.preventDefault();
    var request = new FormData(this);
    var endpoint= route4;
    $.ajax({
      url: endpoint,
      method: "POST",
      data: request,
      contentType: false,
      cache: false,
      processData: false,
      beforeSend: function(){
        $('#loader').attr("style", "");
      },
      success:function(data) {
        document.getElementById('kurikulum').reset();
        if(data.status == 'success') {
          reload(pendidikan_id, 'reload-kurikulum', 'kurikulum');
        }
        berhasil(data.status, data.pesan);
      },
      complete:function(data) {
        $('#loader').attr("style", "display:none");
      },
      error: function(xhr, status, error){
        var error = xhr.responseJSON; 
        if ($.isEmptyObject(error) == false) {
          $.each(error.errors, function(key, value) {
            gagal(key, value);
          });
        }
      } 
    }); 
    return false;
  });
  // END UPLOAD KURIKULUM

  // UPLOAD STRUKTUR ORGANISASI
  $('#struktur-organisasi').submit(function(e) {
    e.preventDefault();
    var request = new FormData(this);
    var endpoint= route4;
    $.ajax({
      url: endpoint,
      method: "POST",
      data: request,
      contentType: false,
      cache: false,
      processData: false,
      beforeSend: function(){
        $('#loader').attr("style", "");
      },
      success:function(data) {
        document.getElementById('struktur-organisasi').reset();
        if(data.status == 'success') {
          reload(pendidikan_id, 'reload-struktur-organisasi', 'struktur_organisasi');
        }
        berhasil(data.status, data.pesan);
      },
      complete:function(data) {
        $('#loader').attr("style", "display:none");
      },
      error: function(xhr, status, error){
        var error = xhr.responseJSON; 
        if ($.isEmptyObject(error) == false) {
          $.each(error.errors, function(key, value) {
            gagal(key, value);
          });
        }
      } 
    }); 
    return false;
  });
  // END UPLOAD STRUKTUR ORGANISASI

  // UPLOAD SK
  $('#sk').submit(function(e) {
    e.preventDefault();
    var request = new FormData(this);
    var endpoint= route4;
    $.ajax({
      url: endpoint,
      method: "POST",
      data: request,
      contentType: false,
      cache: false,
      processData: false,
      beforeSend: function(){
        $('#loader').attr("style", "");
      },
      success:function(data) {
        document.getElementById('sk').reset();
        if(data.status == 'success') {
          reload(pendidikan_id, 'reload-sk', 'sk');
        }
        berhasil(data.status, data.pesan);
      },
      complete:function(data) {
        $('#loader').attr("style", "display:none");
      },
      error: function(xhr, status, error){
        var error = xhr.responseJSON; 
        if ($.isEmptyObject(error) == false) {
          $.each(error.errors, function(key, value) {
            gagal(key, value);
          });
        }
      } 
    }); 
    return false;
  });
  // END UPLOAD SK

  // UPLOAD SERTIFIKAT TANAH
  $('#sertifikat-tanah').submit(function(e) {
    e.preventDefault();
    var request = new FormData(this);
    var endpoint= route4;
    $.ajax({
      url: endpoint,
      method: "POST",
      data: request,
      contentType: false,
      cache: false,
      processData: false,
      beforeSend: function(){
        $('#loader').attr("style", "");
      },
      success:function(data) {
        document.getElementById('sertifikat-tanah').reset();
        if(data.status == 'success') {
          reload(pendidikan_id, 'reload-sertifikat-tanah', 'sertifikat_tanah');
        }
        berhasil(data.status, data.pesan);
      },
      complete:function(data) {
        $('#loader').attr("style", "display:none");
      },
      error: function(xhr, status, error){
        var error = xhr.responseJSON; 
        if ($.isEmptyObject(error) == false) {
          $.each(error.errors, function(key, value) {
            gagal(key, value);
          });
        }
      } 
    }); 
    return false;
  });
  // END UPLOAD SERTIFIKAT TANAH

  // UPLOAD NIB
  $('#nib').submit(function(e) {
    e.preventDefault();
    var request = new FormData(this);
    var endpoint= route4;
    $.ajax({
      url: endpoint,
      method: "POST",
      data: request,
      contentType: false,
      cache: false,
      processData: false,
      beforeSend: function(){
        $('#loader').attr("style", "");
      },
      success:function(data) {
        document.getElementById('nib').reset();
        if(data.status == 'success') {
          reload(pendidikan_id, 'reload-nib', 'nib');
        }
        berhasil(data.status, data.pesan);
      },
      complete:function(data) {
        $('#loader').attr("style", "display:none");
      },
      error: function(xhr, status, error){
        var error = xhr.responseJSON; 
        if ($.isEmptyObject(error) == false) {
          $.each(error.errors, function(key, value) {
            gagal(key, value);
          });
        }
      } 
    }); 
    return false;
  });
  // END UPLOAD NIB

  // UPLOAD NPSN
  $('#npsn').submit(function(e) {
    e.preventDefault();
    var request = new FormData(this);
    var endpoint= route4;
    $.ajax({
      url: endpoint,
      method: "POST",
      data: request,
      contentType: false,
      cache: false,
      processData: false,
      beforeSend: function(){
        $('#loader').attr("style", "");
      },
      success:function(data) {
        document.getElementById('npsn').reset();
        if(data.status == 'success') {
          reload(pendidikan_id, 'reload-npsn', 'npsn');
        }
        berhasil(data.status, data.pesan);
      },
      complete:function(data) {
        $('#loader').attr("style", "display:none");
      },
      error: function(xhr, status, error){
        var error = xhr.responseJSON; 
        if ($.isEmptyObject(error) == false) {
          $.each(error.errors, function(key, value) {
            gagal(key, value);
          });
        }
      } 
    }); 
    return false;
  });
  // END UPLOAD NPSN

  // UPLOAD IZIN LAMA
  $('#izin_lama').submit(function(e) {
    e.preventDefault();
    var request = new FormData(this);
    var endpoint= route4;
    $.ajax({
      url: endpoint,
      method: "POST",
      data: request,
      contentType: false,
      cache: false,
      processData: false,
      beforeSend: function(){
        $('#loader').attr("style", "");
      },
      success:function(data) {
        document.getElementById('izin_lama').reset();
        if(data.status == 'success') {
          reload(pendidikan_id, 'reload-izin_lama', 'izin_lama');
        }
        berhasil(data.status, data.pesan);
      },
      complete:function(data) {
        $('#loader').attr("style", "display:none");
      },
      error: function(xhr, status, error){
        var error = xhr.responseJSON; 
        if ($.isEmptyObject(error) == false) {
          $.each(error.errors, function(key, value) {
            gagal(key, value);
          });
        }
      } 
    }); 
    return false;
  });
  // END UPLOAD IZIN LAMA

  // UPLOAD BERKAS PENDUKUNG
  $('#berkas_pendukung').submit(function(e) {
    e.preventDefault();
    var request = new FormData(this);
    var endpoint= route4;
    $.ajax({
      url: endpoint,
      method: "POST",
      data: request,
      contentType: false,
      cache: false,
      processData: false,
      beforeSend: function(){
        $('#loader').attr("style", "");
      },
      success:function(data) {
        document.getElementById('berkas_pendukung').reset();
        if(data.status == 'success') {
          reload(pendidikan_id, 'reload-berkas_pendukung', 'berkas_pendukung');
        }
        berhasil(data.status, data.pesan);
      },
      complete:function(data) {
        $('#loader').attr("style", "display:none");
      },
      error: function(xhr, status, error){
        var error = xhr.responseJSON; 
        if ($.isEmptyObject(error) == false) {
          $.each(error.errors, function(key, value) {
            gagal(key, value);
          });
        }
      } 
    }); 
    return false;
  });
  // END UPLOAD BERKAS PENDUKUNG

   // mereload tombol preview upload file
   function reload(id, load, field) {
    $('#'+load).empty();
    $.ajax({
      'url': '../reload/' + id,
      'dataType': 'json',
      success: function(data) {
        $('#'+load).append('<a href="../../storage/'+data[field]+'" target="_blank">Lihat berkas</a>');
      },
      error: function(xhr, status, error) {
        var error = xhr.responseJSON;
        if ($.isEmptyObject(error) == false) {
          $.each(error.errors, function(key, value) {
            alert(key + value);
          });
        }
      }
    });
  }
  //end reload preview upload

  // END TAB 4

  // TAB 5
  $('#tab5').submit(function(e) {
    e.preventDefault();
    Swal.fire({
      title: 'Kirim Berkas ?',
      text: "Pastikan semua berkas pada form telah diisi!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, Kirim!',
      timer: 6500
    }).then((result) => {
      if (result.value) {
        var request = new FormData(this);
        var endpoint= route5;
        $.ajax({
          url: endpoint,
          method: "POST",
          data: request,
          contentType: false,
          cache: false,
          processData: false,
          beforeSend: function(){
            $('#loader').attr("style", "");
          },
          success:function(data){
            berhasil(data.status, data.pesan);
          },
          complete:function(data) {
            $('#loader').attr("style", "display:none");
          },
          error: function(xhr, status, error){
            var error = xhr.responseJSON; 
            if ($.isEmptyObject(error) == false) {
              $.each(error.errors, function(key, value) {
                gagal(key, value);
              });
            }
          } 
        }); 
      }

    });
  });


  // function updateberkas() { // verifikasi berkas berhasil
  //   $(document).on('click', '#update-button', function(){
  //     Swal.fire({
  //       title: 'Kirim Berkas ?',
  //       text: "Pastikan semua berkas pada form telah diisi!",
  //       type: 'warning',
  //       showCancelButton: true,
  //       confirmButtonColor: '#3085d6',
  //       cancelButtonColor: '#d33',
  //       confirmButtonText: 'Ya, Kirim!',
  //       timer: 6500
  //     }).then((result) => {
  //       if (result.value) {
  //         token = $('meta[name="csrf-token"]').attr('content');
  //         var endpoint= route5;
  //         $.ajax({
  //           url: endpoint,
  //           method: "POST",
  //           data : {
  //             '_method' : 'POST',
  //             '_token'  : token
  //           },
  //           beforeSend: function(){
  //             $('#loader').attr("style", "");
  //           },
  //           success:function(data){
  //             if(data.status == 'success') {
  //               successToRelaoad(data.status, data.pesan);
  //             } else {
  //               berhasil(data.status, data.pesan);
  //             }
  //           },
  //           complete:function(data) {
  //             $('#loader').attr("style", "display:none");
  //           },
  //           error: function(xhr, status, error){
  //             var error = xhr.responseJSON; 
  //             if ($.isEmptyObject(error) == false) {
  //               $.each(error.errors, function(key, value) {
  //                 gagal(key, value);
  //               });
  //             }
  //           } 
  //         }); 
  //       }
  //     });
  //   });
  // }
  // END TAB 5


  function jenis(jenis) {
    if(jenis == '') {
      $('#layout-kategori').attr("style", "display: none");
      $('#kategori').empty();
      return null;
    }
    $.ajax({
      'url': "../../cek-kategori/" + jenis,
      'dataType': 'json',
      success: function(data) {
        if(data[0].kategori != null) {
          $('#kategori').empty();
          $('#layout-kategori').attr("style", "");
          jQuery.each(data, function(i, val) {
            if(val.id == id_jenis_izin_old) {
              check = 'checked';
            } else {
              check = '';
            }
            $('#kategori').append('<div class="form-check"><input class="form-check-input" type="radio" name="jenis_izin" value="'+val.id+'" '+check+'><label class="form-check-label"">'+val.kategori+'</label></div>');
          });
        }else{
          $('#layout-kategori').attr("style", "display: none");
          $('#kategori').empty();
          $('#kategori').append('<input type="hidden" value="'+data[0].id+'" name="jenis_izin"');
        }
      },
      error: function(xhr, status, error) {
        var error = xhr.responseJSON;
        if ($.isEmptyObject(error) == false) {
          $.each(error.errors, function(key, value) {
            alert(key + value);
          });
        }
      }
    })
  }

  function verifikasi() {   
    $('a[href="#kt_tab_pane_2"]').click();
  }

  function to_tab_5() {   
    $('a[href="#kt_tab_pane_5"]').click();
  }

  $(document).ready(function () {
    var kec1 = $('#kecamatan').val();
    show_kelurahan1(kec1);
  });

      // menampilkan kelurahan1 setelah memilih kecamatan1
      function show_kelurahan1(kec) {
        $("#kelurahan").empty();
        $("#kelurahan").append("<option value=''>--Pilih kelurahan--</option>");
        $.ajax({
          'url': "../../cek-kelurahan/" + kec,
          'dataType': 'json',
          success: function(data) {

            jQuery.each(data, function(i, val) {
              if(val.id == kel_id) {
                check = 'selected';
              } else {
                check = '';
              }
              $('#kelurahan').append('<option value="' + val.id + '" '+check+'>' + val.kecamatan +' - '+ val.kelurahan + '</option>');
            });
          },
          error: function(xhr, status, error) {
            var error = xhr.responseJSON;
            if ($.isEmptyObject(error) == false) {
              $.each(error.errors, function(key, value) {
                alert(key + value);
              });
            }
          }
        })
      }
  //end menampilkan kelurahan1 setelah memilih kecamatan1

