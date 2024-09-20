<style type="text/css">
    .colornya {
      background: linear-gradient(90deg, rgba(1,106,156,1) 0%, rgba(137,96,203,1) 0%, rgba(230,139,11,1) 100%);
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
                <?php if(isset($opt_user) && is_array($opt_user)){?> 
                  <?php foreach($opt_user as $k=>$v){?>
                    <option value="<?php echo $v['id'];?>" <?php if(!empty($iduser) && $v['id'] == $iduser) echo 'selected="selected"';?>>
                      <?php echo $v['txt'];?>
                    </option>
                  <?php }?>
                <?php }?>
              </select>
            </div>
          </div> 
          <div class="col-md-3">
            <div class="form-group">
              <select class="form-control select2nya" id="dashboard">
                <option value="">
                  -- Pilih Laporan --
                </option>
                <?php if(isset($opt_dashboard) && is_array($opt_dashboard)){?> 
                  <?php foreach($opt_dashboard as $k=>$v){?>
                    <option value="<?php echo $v['id'];?>" <?php if(!empty($iduser) && $v['id'] == $iduser) echo 'selected="selected"';?>>
                      <?php echo $v['txt'];?>
                    </option>
                  <?php }?>
                <?php }?>
              </select>
            </div>
          </div> 
          <div class="col-md-3 bln">
            <div class="form-group">
              <select class="form-control select2nya" id="id_bulan">
                <option value="">
                  -- Pilih Bulan --
                </option>
                <?php if(isset($opt_bln) && is_array($opt_bln)){?> 
                  <?php foreach($opt_bln as $k=>$v){?>
                    <option value="<?php echo $v['id'];?>" <?php if(!empty($id_bulan) && $v['id'] == $id_bulan) echo 'selected="selected"';?>>
                      <?php echo $v['txt'];?>
                    </option>
                  <?php }?>
                <?php }?>
              </select>
            </div>
          </div> 
          <div class="col-md-1">
            <div class="form-group">
              <a href="javascript:void(0)" title="Add" class="btn btn-primary btn-sm btn-flat tombol_cari" onClick="gendashboardsearch('index-dashboard-analisis','index-dashboard-analisis');">
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
    <div class="col-md-6">
        <div class="nav-tabs-custom">
            <div class="box box-default">
                <div class="box-header with-border">
                    <div class="small-box colornya">
                        <div class="inner">
                          <span><i class="fa fa-money"></i>&nbsp;&nbsp;&nbsp;Aset Investasi</span>
                          <p style="font-size: 20px; font-weight:bold;">Rp 200.000.000.000.000,-</p>
                        </div>
                    </div>
                </div>
                <div class="box-body">
                    <div id="container-investasi"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="nav-tabs-custom">
            <div class="box box-default">
                <div class="box-header with-border">
                    <div class="small-box colornya">
                        <div class="inner">
                          <span><i class="fa fa-money"></i>&nbsp;&nbsp;&nbsp;Aset Bukan Investasi</span>
                          <p style="font-size: 20px; font-weight:bold;">Rp 1.000.000.000.000,-</p>
                        </div>
                    </div>
                </div>
                <div class="box-body">
                     <div id="container-bukan-investasi"></div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-md-6">
        <div class="nav-tabs-custom">
            <div class="box box-default">
                <div class="box-header with-border">
                    <div class="small-box colornya">
                        <div class="inner">
                          <span><i class="fa fa-money"></i>&nbsp;&nbsp;&nbsp;Kewajiban</span>
                          <p style="font-size: 20px; font-weight:bold;">Rp 340.000.000.000.000,-</p>
                        </div>
                    </div>
                </div>
                <div class="box-body">
                    <div id="container-kewajiban"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="nav-tabs-custom">
            <div class="box box-default">
                <div class="box-header with-border">
                    <div class="small-box colornya">
                        <div class="inner">
                         <span><i class="fa fa-money"></i>&nbsp;&nbsp;&nbsp;Dana Bersih</span>
                         <p style="font-size: 20px; font-weight:bold;">Rp 147.000.000.000.000,-</p>
                        </div>
                    </div>
                </div>
                <div class="box-body">
                     <div id="container-dana-bersih"></div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-md-12">
        <div class="nav-tabs-custom">
            <div class="box box-default">
                <div class="box-header with-border colornya">
                    <h3 class="box-title">Proporsi Portofolio Aset Investasi</h3>
                </div>
                <div class="box-body">
                     <div id="container-portofolio"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    $('.bln').hide();
  $('.smt').hide();
  $('.thn').hide();

  $(".select2nya").select2( { 'width':'100%' } );


  $('#dashboard').on('change', function(){
    var val = $(this).val();
    console.log(val);
    if(val == 'BULANAN'){
        $('.bln').show();
        $('.smt').hide();
        $('.thn').hide();
    }else if(val == 'SEMESTERAN'){
        $('.bln').hide();
        $('.smt').show();
        $('.thn').hide();
    }else if(val == 'TAHUNAN'){
        $('.bln').hide();
        $('.smt').hide();
        $('.thn').show();
    }else{
        $('.bln').hide();
        $('.smt').hide();
        $('.thn').hide();
    }
    
});

$('.tahun').text(tahun);
</script>
<script type="text/javascript">
    $.post(host+'dashboard-tampil/get_dana_bersih', {[csrf_token]:csrf_hash}, function(resp){
        if(resp){
            parsing = JSON.parse(resp);

            var datanya = [];
                for(var i=0; i < parsing.arr_jns.length; i++) {
                datanya.push({
                    name: parsing.arr_jns[i],
                    y: parsing.arr_data_pie[i],
                    // color: parsing.color[i],
                    });
                }

            // console.log(datanya);
            var chartD1 = 
            [{
                name: 'Persentase',
                colorByPoint: true,
                innerSize: '60%',
                data: datanya,
            }];


            genPieChart("container-portofolio", "", "", chartD1, '', 250);
        }
    });

    $.post(host+'dashboard-tampil/get_dana_bersih', {[csrf_token]:csrf_hash}, function(resp){
        if(resp){
            var param = {};
            parsing = JSON.parse(resp);
            var xChart = parsing.arr_bln;

            var yChart1 = [
            {
                name: 'NILAI',
                type: 'line',
                color: {
                    linearGradient: {
                        x1: 0,
                        x2: 0,
                        y1: 1,
                        y2: 0
                    },
                    stops: [
                    [0, '#cee60b'],
                    [1, '#ff7c8f']
                    ]
                },
                data: parsing.arr_data_line,
            }];


            var yChart2 = [
            {
                name: 'NILAI',
                type: 'line',
                color: {
                    linearGradient: {
                        x1: 0,
                        x2: 0,
                        y1: 1,
                        y2: 0
                    },
                    stops: [
                    [0, '#cee60b'],
                    [1, '#0bcfe6']
                    ]
                },
                data: parsing.arr_data_line,
            }];
            genColumnChart("container-investasi", "", xChart, yChart1, "", "", "", false);
            genColumnChart("container-bukan-investasi", "", xChart, yChart1, "", "", "", false);
            genColumnChart("container-kewajiban", "", xChart, yChart2, "", "", "", false);
            genColumnChart("container-dana-bersih", "", xChart, yChart2, "", "", "", false);
        }
    });




</script>