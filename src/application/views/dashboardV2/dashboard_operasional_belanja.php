<style type="text/css">
  .colornya {
    background: linear-gradient(90deg, hsla(210, 91%, 39%, 1) 0%, hsla(321, 55%, 50%, 1) 100%);
    color: #ffff;
  }
</style>

<div class="row">
  <div class="col-md-12">
    <div class="nav-tabs-custom">
      <div class="box box-default">
        <div class="box-header with-border">
          <h3 class="box-title">Pilihan</h3>
        </div>
        <div class="box-body">
          <div class="col-md-3">
            <div class="form-group">
              <select class="form-control select2nya" id="iduser">
                <option value="">
                  -- Pilih User--
                </option>
                <?php if (isset($opt_user) && is_array($opt_user)) { ?>
                  <?php foreach ($opt_user as $k => $v) { ?>
                    <option value="<?php echo $v['id']; ?>" <?php if (!empty($iduser) && $v['id'] == $iduser) echo 'selected="selected"'; ?>>
                      <?php echo $v['txt']; ?>
                    </option>
                  <?php } ?>
                <?php } ?>
              </select>
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <select class="form-control select2nya" id="dashboard">
                <option value="">
                  -- Pilih Laporan --
                </option>
                <?php if (isset($opt_dashboard) && is_array($opt_dashboard)) { ?>
                  <?php foreach ($opt_dashboard as $k => $v) { ?>
                    <option value="<?php echo $v['id']; ?>" <?php if (!empty($iduser) && $v['id'] == $iduser) echo 'selected="selected"'; ?>>
                      <?php echo $v['txt']; ?>
                    </option>
                  <?php } ?>
                <?php } ?>
              </select>
            </div>
          </div>
          <div class="col-md-1">
            <div class="form-group">
              <a href="javascript:void(0)" title="Add" class="btn btn-primary btn-sm btn-flat filter_data">
                <i class="fa fa-search"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-md-12">
    <div class="col-md-6">
      <div class="nav-tabs-custom">
        <div class="box box-default">
          <div class="box-header with-border">
            <div class="small-box colornya">
              <div class="inner">
                <span><i class="fa fa-money"></i>&nbsp;&nbsp;&nbsp;Jumlah Pembayaran Belanja Pensiun</span>
                <p style="font-size: 20px; font-weight:bold;" id="tot-pembayaran"></p>
              </div>
            </div>
          </div>
          <div class="box-body">
            <div id="container-line"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="col-md-12">
        <div class="nav-tabs-custom">
          <div class="box box-default">
            <div class="box-header with-border colornya">
              <p class="box-title" style="font-size:16px;">Jumlah Pembayaran Pensiun Per Jenis Penerima</p>
            </div>
            <div class="box-body">
              <div id="container-pie1"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="nav-tabs-custom">
          <div class="box box-default">
            <div class="box-header with-border colornya">
              <p class="box-title" style="font-size:16px;">Jumlah Pembayaran Pensiun Per Kelompok Penerima</p>
            </div>
            <div class="box-body">
              <div id="container-pie2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<script type="text/javascript">
  $('.bln').hide();
  $('.smt').hide();
  $('.thn').hide();

  $(".select2nya").select2({
    'width': '100%'
  });


  $('#dashboard').on('change', function() {
    var val = $(this).val();
    console.log(val);
    if (val == 'BULANAN') {
      $('.bln').show();
      $('.smt').hide();
      $('.thn').hide();
    } else if (val == 'SEMESTERAN') {
      $('.bln').hide();
      $('.smt').show();
      $('.thn').hide();
    } else if (val == 'TAHUNAN') {
      $('.bln').hide();
      $('.smt').hide();
      $('.thn').show();
    } else {
      $('.bln').hide();
      $('.smt').hide();
      $('.thn').hide();
    }

  });

  $('.tahun').text(tahun);
</script>
<script type="text/javascript">
  var param = {};
  param['iduser'] = "";
  param['ds'] = 'SEMESTERAN';
  param[csrf_token] = csrf_hash;
  $.LoadingOverlay("show");

  $.post(host + 'dashboard-tampil-operasional-apbn/get_operasional_belanja', param, function(resp) {
    if (resp) {
      $.LoadingOverlay("hide", true);

      parsing = JSON.parse(resp);
      var xChart = parsing.arr_periode;
      var xChart2 = parsing.arr_data;

      var yChart = [{
        name: 'JUMLAH',
        type: 'line',
        height: 700,
        color: {
          linearGradient: {
            x1: 0,
            x2: 0,
            y1: 1,
            y2: 0
          },
          stops: [
            [0, '#e93981'],
            [1, '#3058ac']
          ]
        },
        data: parsing.arr_data,
      }];

      // PIE CHART

      // Data Jenis Penerima
      var datanya = [];
      for (var i = 0; i < parsing.arr_jns.length; i++) {
        datanya.push({
          name: parsing.arr_jns[i],
          y: parsing.arr_data_jns[i]
        });
      }

      // console.log(datanya);
      var chartD1 = [{
        name: 'Persentase',
        colorByPoint: true,
        innerSize: '60%',
        data: datanya,
      }];


      // Data Kelompok Penerima
      var datanya2 = [];
      for (var i = 0; i < parsing.arr_kelompok.length; i++) {
        datanya2.push({
          name: parsing.arr_kelompok[i],
          y: parsing.arr_data_kelompok[i]
        });
      }

      // console.log(datanya);
      var chartD2 = [{
        name: 'Persentase',
        colorByPoint: true,
        innerSize: '60%',
        data: datanya2,
      }];


      var pembayaran = 'Rp ' + parsing.tot_pembayaran + ',-';
      $('#tot-pembayaran').html(pembayaran);

      genPieChart2("container-pie1", "", "", chartD1, '', 250);
      genPieChart2("container-pie2", "", "", chartD2, '', 250);
      genColumnChart3("container-line", "", xChart, yChart, "", "", "", false);
    }
  });


  $('.filter_data').on('click', function() {

    if ($('#dashboard').val() == "") {
      $.messager.alert('SMART AIP', 'Pilih jenis laporan terlebih dahulu !', 'warning');
      return false;
    }

    var param = {};
    param['iduser'] = $('#iduser').val();
    param['ds'] = $('#dashboard').val();
    param[csrf_token] = csrf_hash;
    $.LoadingOverlay("show");
    $.post(host + 'dashboard-tampil-operasional-apbn/get_operasional_belanja', param, function(resp) {
      if (resp) {
        $.LoadingOverlay("hide", true);

        parsing = JSON.parse(resp);
        var xChart = parsing.arr_periode;
        var xChart2 = parsing.arr_data;

        var yChart = [{
          name: 'JUMLAH',
          type: 'line',
          color: {
            linearGradient: {
              x1: 0,
              x2: 0,
              y1: 1,
              y2: 0
            },
            stops: [
              [0, '#e93981'],
              [1, '#3058ac']
            ]
          },
          data: parsing.arr_data,
        }];

        // PIE CHART

        // Data Jenis Penerima
        var datanya = [];
        for (var i = 0; i < parsing.arr_jns.length; i++) {
          datanya.push({
            name: parsing.arr_jns[i],
            y: parsing.arr_data_jns[i]
          });
        }

        // console.log(datanya);
        var chartD1 = [{
          name: 'Persentase',
          colorByPoint: true,
          innerSize: '60%',
          data: datanya,
        }];


        // Data Kelompok Penerima
        var datanya2 = [];
        for (var i = 0; i < parsing.arr_kelompok.length; i++) {
          datanya2.push({
            name: parsing.arr_kelompok[i],
            y: parsing.arr_data_kelompok[i]
          });
        }

        // console.log(datanya);
        var chartD2 = [{
          name: 'Persentase',
          colorByPoint: true,
          innerSize: '60%',
          data: datanya2,
        }];


        var pembayaran = 'Rp ' + parsing.tot_pembayaran + ',-';
        $('#tot-pembayaran').html(pembayaran);

        genPieChart2("container-pie1", "", "", chartD1, '', 250);
        genPieChart2("container-pie2", "", "", chartD2, '', 250);
        genColumnChart3("container-line", "", xChart, yChart, "", "", "", false);
      }
    });

  });
</script>