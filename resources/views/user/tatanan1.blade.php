@extends('layouts.user.app')

@section('title', 'Kehidupan Masyarakat Sehat Mandiri')

@section('subheader')
<link href="{{ asset('css/pages/wizard/wizard-1.css') }} " rel="stylesheet" type="text/css" />
<h3 class="kt-subheader__title">
  Home
</h3>
<span class="kt-subheader__separator kt-hidden"></span>
<div class="kt-subheader__breadcrumbs">
  <a href="#" class="kt-subheader__breadcrumbs-home"><i class="flaticon2-shelter"></i></a>
  <span class="kt-subheader__breadcrumbs-separator"></span>
  <a href="" class="kt-subheader__breadcrumbs-link">
  Kehidupan Masyarakat Sehat Mandiri </a>
  <!-- <span class="kt-subheader__breadcrumbs-link kt-subheader__breadcrumbs-link--active">Active link</span> -->
</div>

@endsection

@section('content')

<!-- LOADER -->
<div style="display: none;" id="loader" class="loader">
</div>
<!-- END LOADER -->

<div class="row justify-content-center">
  <div class="col-12">
    @include('layouts.user.alert')
  </div>
</div>

<div class="kt-content  kt-grid__item kt-grid__item--fluid" id="kt_content">
  <div class="kt-portlet">
    <div class="kt-portlet__body kt-portlet__body--fit">
      <div class="kt-grid  kt-wizard-v1 kt-wizard-v1--white" id="kt_wizard_v1" data-ktwizard-state="step-first">
        <div class="kt-grid__item">
          <div class="card card-custom gutter-b">
            <div class="card-header card-header-tabs-line">
              <div class="card-toolbar">
                <ul class="nav nav-tabs nav-bold nav-tabs-line">
                  <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#kt_tab_pane_1">
                      <span class="nav-icon"><i class="fa fa-user"></i></span>
                      <span class="nav-text">Step 1</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#kt_tab_pane_2">
                      <span class="nav-icon"><i class="fa fa-tag"></i></span>
                      <span class="nav-text">Step 2</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#kt_tab_pane_3">
                      <span class="nav-icon"><i class="fa fa-home"></i></span>
                      <span class="nav-text">Step 3</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#kt_tab_pane_4">
                      <span class="nav-icon"><i class="fa fa-folder"></i></span>
                      <span class="nav-text">Step 4</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#kt_tab_pane_5">
                      <span class="nav-icon"><i class="fa fa-exclamation"></i></span>
                      <span class="nav-text">Kirim Data Dan Berkas</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="card-body">
              <div class="tab-content">
                <!-- TAB 1 -->
                <div class="tab-pane fade show active" id="kt_tab_pane_1" role="tabpanel" aria-labelledby="kt_tab_pane_1_3">
                  <div class="kt-wizard-v1__content" data-ktwizard-type="step-content" data-ktwizard-state="current">
                    <div class="container">
                      <form action="" method="POST" id="tab1">
                        @csrf
                        <h5>I. KOMITMEN DAERAH TERHADAP MUATAN MATERI KESEHATAN DAN KESELAMATAN KERJA</h5>
                        <h6>1.1 Regulasi Daerah</h6>

                        <div class="form-group row">
                          <div class="col-lg-12">
                           1. Adanya regulasi/kebijakan di Kawasan Perkantoran, Perindustrian (IKM) dan UMKM     
                           <div class="container">
                             <div class="form-check">
                              <input class="form-check-input" type="radio" name="p1" value="a,100">
                              <label class="form-check-label">a. Ada
                              </label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="radio" name="p1" value="b,0">
                              <label class="form-check-label">b. Tidak ada
                              </label>
                            </div>
                          </div>
                          <div class="input-group col-lg-4">
                            @csrf
                            <input type="file" class="form-control" name="kurikulum" accept="application/pdf" required>
                            <input type="hidden" class="form-control" name="p1" value="kurikulum" >
                            <button type="submit" class="btn btn-outline-secondary">Simpan
                            </button>
                          </div>
                        </div>
                      </div> 

                      <h6>1.2 Perencanaan Dalam RPJMD</h6>
                      <div class="form-group row">
                        <div class="col-lg-12">
                         2. Kegiatan  penyelenggaraan kesehatan dan keselamatan kerja di Kawasan Perkantoran, Perindustrian (IKM) dan UMKM masuk dalam dokumen perencanaan pembangunan daerah        
                         <div class="container">
                           <div class="form-check">
                            <input class="form-check-input" type="radio" name="p2" value="a,100">
                            <label class="form-check-label">a. Masuk dalam RPJMD dan RKPD

                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="p2" value="b,50">
                            <label class="form-check-label">b. Masuk dalam RPJMD
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="p2" value="c,25">
                            <label class="form-check-label">c. Masuk dalam RKPD
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="p2" value="d,0">
                            <label class="form-check-label">d. Tidak masuk satu pun 
                            </label>
                          </div>
                        </div>
                        <div class="input-group col-lg-4">
                          @csrf
                          <input type="file" class="form-control" name="kurikulum" accept="application/pdf" required>
                          <input type="hidden" class="form-control" name="p1" value="kurikulum" >
                          <button type="submit" class="btn btn-outline-secondary">Simpan
                          </button>
                        </div>
                      </div>
                    </div> 

                    <h5>II. PERKANTORAN</h5>
                        <h6>2.1 Keselamatan Dan Kesehatan Kerja (K3)</h6>

                        <div class="form-group row">
                          <div class="col-lg-12">
                           3. Persentase kantor yang telah menerapkan K3        
                           <div class="container">
                             <div class="form-check">
                              <input class="form-check-input" type="radio" name="p3" value="a,100">
                              <label class="form-check-label">a. >80% Kantor telah menerapkan K3
                              </label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="radio" name="p3" value="b,50">
                              <label class="form-check-label">b. 50-80% Kantor telah menerapkan K3
                              </label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="radio" name="p3" value="c,25">
                              <label class="form-check-label">c. < 50% Kantor telah menerapkan K3

                              </label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="radio" name="p3" value="d,0">
                              <label class="form-check-label">d. Tidak ada

                              </label>
                            </div>
                          </div>
                          <div class="input-group col-lg-4">
                            @csrf
                            <input type="file" class="form-control" name="kurikulum" accept="application/pdf" required>
                            <input type="hidden" class="form-control" name="p1" value="kurikulum" >
                            <button type="submit" class="btn btn-outline-secondary">Simpan
                            </button>
                          </div>
                        </div>
                      </div> 

                    <div class="row align-items-center">
                      <div class="col-12 kt-align-right">
                        <button type="submit" class="btn btn-outline-info btn-sm" title="Terima Berkas">
                          <i class="fa fa-check"></i> Simpan & Selanjutnya
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <!-- END TAB 1 -->

            <!-- TAB 2 -->
            <div class="tab-pane fade" id="kt_tab_pane_2" role="tabpanel" aria-labelledby="kt_tab_pane_2_3">
             <div class="container">
              <form method="POST" action="" id="tab2">

                <div class="form-group row" style="display: none;" id="layout-kategori">
                  <label class="col-lg-3 col-form-label">Kategori:*</label>
                  <div class="col-lg-9" id="kategori">
                  </div>
                </div>

                <div class="form-group row">
                  <label class="col-lg-3 col-form-label">Nama Pendidikan:*</label>
                  <div class="col-lg-9">
                    <input type="text" class="form-control" name="nama_pendidikan" value="">
                  </div>
                </div>
                <div class="row align-items-center">
                  <div class="col-12 kt-align-right">
                    <button type="submit" class="btn btn-outline-info btn-sm">
                      <i class="fa fa-check"></i> Simpan & Selanjutnya
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- END TAB 2 -->

          <!-- TAB 3 -->
          <div class="tab-pane fade" id="kt_tab_pane_3" role="tabpanel" aria-labelledby="kt_tab_pane_3_3">
            <div class="container">
              <form action="" method="POST" id="tab3">@csrf
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label">Kelurahan:*</label>
                  <div class="col-lg-9">
                    <select class="form-control" name="kelurahan" id="kelurahan" required>
                      <option></option>
                    </select>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label">Jalan:*</label>
                  <div class="col-lg-9">
                    <input type="text" class="form-control" name="jalan" value="" required>
                  </div>
                </div>
                <div class="row align-items-center">
                  <div class="col-12 kt-align-right">
                    <button type="submit" class="btn btn-outline-info btn-sm">
                      <i class="fa fa-check"></i> Simpan & Selanjutnya
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- END TAB 3 -->

          <!-- TAB 5 -->
          <div class="tab-pane fade" id="kt_tab_pane_5" role="tabpanel" aria-labelledby="kt_tab_pane_4">
            <div class="container">
              <form id=tab5>
                @csrf
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label">Pernyataan: </label>
                  <div class="col-lg-9">
                    <input type="checkbox" class="" name="ceklis" required="">  Dengan ini menyatakan bahwa data yang dikirim merupakan data yang sebenarnya dan apabila dikemudian hari terdapat ketidaksesuain maka saya siap untuk menerima konsekuensi.
                  </div>
                </div>
                <div class="row align-items-center">
                  <div class="col-12 kt-align-right">
                    <button type="submit" class="btn btn-outline-info btn-sm" title="Kirim Berkas">
                      <i class="fa fa-check"></i> Kirim Berkas
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- END TAB 5 -->
        </div>
      </div>
       <!--    <div class="card-footer">
            halsjfohasjf
          </div> -->
        </div>
      </div>
    </div>
  </div>
</div>
</div>

@endsection

@section('page_script')
<script type="text/javascript">



</script>

<script type="text/javascript" src="{{asset('js/user/pendidikan-create.js')}}"></script>

<script type="text/javascript">
  function successToRelaoad(status, pesan) {
    Swal.fire({
      type: status,
      title: pesan,
      showConfirmButton: true,
      button: "Ok"
    }).then((result) => {
      window.location.href = ""
    })
  }

  function berhasil(status, pesan) {
    Swal.fire({
      type: status,
      title: pesan,
      showConfirmButton: true,
      button: "Ok"
    })
  }

  function gagal(key, pesan) {
    key = '';
    Swal.fire({
      type: 'error',
      title: key + pesan,
      showConfirmButton: true,
      timer: 25500,
      button: "Ok"
    })
  }
</script>
@endsection