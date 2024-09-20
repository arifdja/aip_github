<style type="text/css">
    .colornya {
      background: linear-gradient(90deg, rgba(1,106,156,1) 0%, rgba(96,203,202,1) 0%, rgba(252,122,100,1) 100%);
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
                          <span><i class="fa fa-money"></i>&nbsp;&nbsp;&nbsp;Arus Kas Dari Aktivitas Investasi</span>
                          <p style="font-size: 20px; font-weight:bold;">Rp 200.000.000.000.000,-</p>
                      </div>
                  </div>
                </div>
                <div class="box-body">
                    <div id="container-aruskas-investasi"></div>
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
                          <span><i class="fa fa-money"></i>&nbsp;&nbsp;&nbsp;Arus Kas Dari Aktivitas Operasional</span>
                          <p style="font-size: 20px; font-weight:bold;">Rp 1.000.000.000.000,-</p>
                      </div>
                  </div>
                </div>
                <div class="box-body">
                     <div id="container-aruskas-operasional"></div>
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
                          <span><i class="fa fa-money"></i>&nbsp;&nbsp;&nbsp;Arus Kas Dari Aktivitas Pendanaan</span>
                          <p style="font-size: 20px; font-weight:bold;">Rp 340.000.000.000.000,-</p>
                      </div>
                  </div>
                </div>
                <div class="box-body">
                    <div id="container-aruskas-pendanaan"></div>
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

    $.post(host+'dashboard-tampil/get_arus_kas', {[csrf_token]:csrf_hash}, function(resp){
        if(resp){
            var param = {};
            parsing = JSON.parse(resp);
            var xChart = parsing.arr_bln;
            var yChart2 = [
            {
                name: 'Akumulasi Realisasi',
                type: 'column',
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
                data: parsing.arr_data_bar,
            },
            {
                name: 'Realisasi Bulanan',
                type: 'line',
                color: {
                    linearGradient: {
                        x1: 0,
                        x2: 0,
                        y1: 1,
                        y2: 0
                    },
                    stops: [
                    [0, '#0bcfe6']
                    ]
                },
                data: parsing.arr_data_line,
            }];

            
            genColumnChart("container-aruskas-investasi", "", xChart, yChart2, "", "", "", false);
            genColumnChart("container-aruskas-operasional", "", xChart, yChart2, "", "", "", false);
            genColumnChart("container-aruskas-pendanaan", "", xChart, yChart2, "", "", "", false);
        }
    });



</script>