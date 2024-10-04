 <!-- Main content -->
            <?php $level = $this->session->userdata('level');?>
            <?php $tahun = $this->session->userdata('tahun');?>
            <style type="text/css">
                td.subchild{
                    padding-left: 50px;
                }
            </style>
            <div class="row">
                <div class="col-xs-12">
				  <div class="nav-tabs-custom">
                    <?php $this->load->view('main/nav_tab_aspek_investasi'); ?>
                    <div class="box box-default">
                        <div class="box-header with-border">
                            <h3 class="box-title">Beban Investasi</h3>
                            <p class="box-title pull-right" style="margin-right:20px"><i class="fa fa-calendar"></i>&nbsp;&nbsp; Semesteran</p>
                        </div>
                        <!-- /.box-header -->
                        <div class="box-body" style="overflow-x:auto;">
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-md-3 adm">
                                        <div class="form-group">
                                            <select class="form-control select2nya" id="iduser">
                                                <option value="">
                                                    -- Pilih --
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
                                            <select class="form-control select2nya" id="semester">
                                                <option value="">
                                                -- Semester --
                                                </option>
                                                <?php if(isset($opt_smt) && is_array($opt_smt)){?> 
                                                    <?php foreach($opt_smt as $k=>$v){?>
                                                        <option value="<?php echo $v['id'];?>" <?php if(!empty($semester) && $v['id'] == $semester) echo 'selected="selected"';?>>
                                                            <?php echo $v['txt'];?>
                                                        </option>
                                                    <?php }?>
                                                <?php }?>
                                            </select>
                                        </div>
                                    </div> 
                                    <div class="col-md-1">
                                        <div class="form-group">
                                            <a href="javascript:void(0)" title="Add" class="btn btn-primary btn-sm btn-flat" onClick="gensemestersearch('index-beban-investasi','index-beban-investasi');">
                                                <i class="fa fa-search"></i>
                                            </a> 
                                        </div>
                                    </div>
                                    <div class="col-md-4 user">
                                        &nbsp;&nbsp;
                                    </div>
                                    <div class="col-md-1 adm">
                                        &nbsp;&nbsp;
                                    </div>
                                    <div  class="col-md-4"> 
                                        <div class="form-group dropdown pull-right user">
                                            <button class="btn btn-sm btn-warning btn-flat dropdown-toggle" type="button" data-toggle="dropdown"><i class="fa fa-info-circle"></i> Keterangan
                                            <span class="caret"></span></button>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <a href="#" data-target="#Modal_ket_sm1" data-toggle="modal" class="user user-smt1" title="Keterangan">Semester I</a>
                                                </li>
                                                <li>
                                                    <a href="#" data-target="#Modal_ket_sm2" data-toggle="modal" class="user user-smt2" title="Keterangan">Semester II</a>
                                                </li>
                                            </ul>
                                        </div> 
                                        <div class="form-group pull-right">
                                           <a href="javascript:void(0)" title="Add" class="btn btn-danger btn-sm btn-flat" onClick="genformsemester('print-all', 'beban_investasi_cetak','beban_investasi_cetak');">
                                              <i class="fa fa-file-pdf-o"></i>&nbsp;&nbsp;Cetak PDF
                                            </a>  
                                            &nbsp;&nbsp;&nbsp;
                                        </div>
                                    </div>
                                </div>
                            </div>
							<?php if($this->session->flashdata('form_true')){?>
							<div id="notif">               
								<?php echo $this->session->flashdata('form_true');?>               
							</div>
							<?php } ?>

                            <!-- ================================= SEMESTER 2 ================================ -->
                            <?php if($semester == 2 || $semester == ""):?>
                            <table id="tbl-invest-smt" class="table table-bordered table-striped table-hover tbl-form">
                                <thead>
									<tr>
                                        <th rowspan="2" width="30%">Uraian Beban Investasi</th>
                                        <th rowspan="2">Saldo Akhir Semester II&nbsp;&nbsp;<span class="thn-filter"></span></th>
                                        <th rowspan="2">Saldo Akhir Semester II&nbsp;&nbsp;<span class="thn"></span></th>
                                        <th colspan="2">Kenaikan/Penurunan</th>
                                        <th rowspan="2">RKA</th>
                                        <th rowspan="2">Capaian Semester II terhadap RKA</th>
									</tr>
                                    <tr>
                                        <th>Nominal</th>
                                        <th>Persentase</th>
                                    </tr>
								
                                </thead>
                                <tbody>
                                <?php if(isset($data_beban) && is_array($data_beban)):?>
                                    <?php foreach($data_beban as $beban):?>
                                        <?php if($beban['type'] == 'P'):?>
                                            <tr>
                                                <td style="text-align: left;"><?=$beban['jenis_investasi']?></td>
                                                <td><?=($beban['saldo_akhir_smt2'] != 0 ) ? rupiah($beban['saldo_akhir_smt2']) : '-';?></td>
                                                <td><?=($beban['saldo_akhir_smt1'] != 0 ) ? rupiah($beban['saldo_akhir_smt1']) : '-';?></td>
                                                <td><?=($beban['nominal'] != 0 ) ? rupiah($beban['nominal']) : '-';?></td>
                                                <td><?=($beban['persentase'] != 0 ) ? persen($beban['persentase']).'%' : '-';?></td>
                                                <td><?=($beban['rka'] != 0 ) ? rupiah($beban['rka']) : '-';?></td>
                                                <td><?=($beban['pers_rka'] != 0 ) ? persen($beban['pers_rka']).'%' : '-';?></td>

                                            </tr>
                                        <?php endif;?>
                                        <?php foreach($beban['child'] as $child):?>
                                            <?php if($child['type'] == 'PC'):?>
                                            <tr>
                                                <td style="text-align:left"><?= $child['jenis_investasi']?></td>
                                                <td><?=($child['saldo_akhir_smt2'] != 0 ) ? rupiah($child['saldo_akhir_smt2']) : '-';?></td>
                                                <td><?=($child['saldo_akhir_smt1'] != 0 ) ? rupiah($child['saldo_akhir_smt1']) : '-';?></td>
                                                <td><?=($child['nominal'] != 0 ) ? rupiah($child['nominal']) : '-';?></td>
                                                <td><?=($child['persentase'] != 0 ) ? persen($child['persentase']).'%' : '-';?></td>
                                                <td><?=($child['rka'] != 0 ) ? rupiah($child['rka']) : '-';?></td>
                                                <td><?=($child['pers_rka'] != 0 ) ? persen($child['pers_rka']).'%' : '-';?></td>
                                            </tr>
                                            <?php endif;?>
                                                <?php foreach($child['subchild'] as $subchild):?>
                                                    <tr>
                                                     <td style="text-align:left; padding-left: 30px; color: #6c7275;"><?='- '.$subchild['jenis_investasi']?></td>
                                                     <td><?=($subchild['saldo_akhir_smt2'] != 0 ) ? rupiah($subchild['saldo_akhir_smt2']) : '-';?></td>
                                                     <td><?=($subchild['saldo_akhir_smt1'] != 0 ) ? rupiah($subchild['saldo_akhir_smt1']) : '-';?></td>
                                                     <td><?=($subchild['nominal'] != 0 ) ? rupiah($subchild['nominal']) : '-';?></td>
                                                     <td><?=($subchild['persentase'] != 0 ) ? persen($subchild['persentase']).'%' : '-';?></td>
                                                     <td><?=($subchild['rka'] != 0 ) ? rupiah($subchild['rka']) : '-';?></td>
                                                     <td><?=($subchild['pers_rka'] != 0 ) ? persen($subchild['pers_rka']).'%' : '-';?></td>
                                                    </tr>
                                                <?php endforeach;?>
                                        <?php endforeach;?>
                                            
                                        
                                    <?php endforeach;?>
                                <?php endif;?>
                                </tbody>
                                <tfoot style="background-color: #d8d8d8; font-weight: bold;">
                                    <td>Total</td>
                                    <td><?=($sum['saldo_akhir_smt2'] != 0 ) ? rupiah($sum['saldo_akhir_smt2']) : '-';?></td>
                                    <td><?=($sum['saldo_akhir_smt1'] != 0 ) ? rupiah($sum['saldo_akhir_smt1']) : '-';?></td>
                                    <td><?=($sum['rka'] != 0 ) ? rupiah($sum['rka']) : '-';?></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tfoot>
                            </table>
                            <?php endif;?>

                            <!-- ========================================= SEMESTER 1 ================================ -->
                            <?php if($semester == 1 ):?>
                            <table id="tbl-invest-smt" class="table table-bordered table-striped table-hover tbl-form">
                                <thead>
                                    <tr>
                                        <th rowspan="2" width="30%">Uraian Beban Investasi</th>
                                        <th rowspan="2">Saldo Akhir Semester I&nbsp;&nbsp;<span class="thn-filter"></span></th>
                                        <th rowspan="2">Saldo Akhir Semester I&nbsp;&nbsp;<span class="thn"></span></th>
                                        <th colspan="2">Kenaikan/Penurunan</th>
                                        <th rowspan="2">RKA</th>
                                        <th rowspan="2">Capaian Semester II terhadap RKA</th>
                                    </tr>
                                    <tr>
                                        <th>Nominal</th>
                                        <th>Persentase</th>
                                    </tr>
                                
                                </thead>
                                <tbody>
                                <?php if(isset($data_beban) && is_array($data_beban)):?>
                                    <?php foreach($data_beban as $beban):?>
                                        <?php if($beban['type'] == 'P'):?>
                                            <tr>
                                                <td style="text-align: left;"><?=$beban['jenis_investasi']?></td>
                                                <td><?=($beban['saldo_akhir_smt2'] != 0 ) ? rupiah($beban['saldo_akhir_smt2']) : '-';?></td>
                                                <td><?=($beban['saldo_akhir_smt1'] != 0 ) ? rupiah($beban['saldo_akhir_smt1']) : '-';?></td>
                                                <td><?=($beban['nominal'] != 0 ) ? rupiah($beban['nominal']) : '-';?></td>
                                                <td><?=($beban['persentase'] != 0 ) ? persen($beban['persentase']).'%' : '-';?></td>
                                                <td><?=($beban['rka'] != 0 ) ? rupiah($beban['rka']) : '-';?></td>
                                                <td><?=($beban['pers_rka'] != 0 ) ? persen($beban['pers_rka']).'%' : '-';?></td>

                                            </tr>
                                        <?php endif;?>
                                        <?php foreach($beban['child'] as $child):?>
                                            <?php if($child['type'] == 'PC'):?>
                                            <tr>
                                                <td style="text-align:left"><?= $child['jenis_investasi']?></td>
                                                <td><?=($child['saldo_akhir_smt2'] != 0 ) ? rupiah($child['saldo_akhir_smt2']) : '-';?></td>
                                                <td><?=($child['saldo_akhir_smt1'] != 0 ) ? rupiah($child['saldo_akhir_smt1']) : '-';?></td>
                                                <td><?=($child['nominal'] != 0 ) ? rupiah($child['nominal']) : '-';?></td>
                                                <td><?=($child['persentase'] != 0 ) ? persen($child['persentase']).'%' : '-';?></td>
                                                <td><?=($child['rka'] != 0 ) ? rupiah($child['rka']) : '-';?></td>
                                                <td><?=($child['pers_rka'] != 0 ) ? persen($child['pers_rka']).'%' : '-';?></td>
                                            </tr>
                                            <?php endif;?>
                                                <?php foreach($child['subchild'] as $subchild):?>
                                                    <tr>
                                                     <td style="text-align:left; padding-left: 30px; color: #6c7275;"><?='- '.$subchild['jenis_investasi']?></td>
                                                     <td><?=($subchild['saldo_akhir_smt2'] != 0 ) ? rupiah($subchild['saldo_akhir_smt2']) : '-';?></td>
                                                     <td><?=($subchild['saldo_akhir_smt1'] != 0 ) ? rupiah($subchild['saldo_akhir_smt1']) : '-';?></td>
                                                     <td><?=($subchild['nominal'] != 0 ) ? rupiah($subchild['nominal']) : '-';?></td>
                                                     <td><?=($subchild['persentase'] != 0 ) ? persen($subchild['persentase']).'%' : '-';?></td>
                                                     <td><?=($subchild['rka'] != 0 ) ? rupiah($subchild['rka']) : '-';?></td>
                                                     <td><?=($subchild['pers_rka'] != 0 ) ? persen($subchild['pers_rka']).'%' : '-';?></td>
                                                    </tr>
                                                <?php endforeach;?>
                                        <?php endforeach;?>
                                            
                                        
                                    <?php endforeach;?>
                                <?php endif;?>
                                </tbody>
                                <tfoot style="background-color: #d8d8d8; font-weight: bold;">
                                    <td>Total</td>
                                    <td><?=($sum['saldo_akhir_smt2'] != 0 ) ? rupiah($sum['saldo_akhir_smt2']) : '-';?></td>
                                    <td><?=($sum['saldo_akhir_smt1'] != 0 ) ? rupiah($sum['saldo_akhir_smt1']) : '-';?></td>
                                    <td><?=($sum['rka'] != 0 ) ? rupiah($sum['rka']) : '-';?></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tfoot>
                            </table>
                            <?php endif;?>
                            <br>
                            <!-- data keterangan  -->
                            <div style="padding:4px;">
                                <p style="margin-left:15px;font-size: 18px;font-weight: bold">Keterangan :
                                </p>
                                <div style="padding:4px;border-style:groove;border-color:lightblue;">
                                    <p style="margin-left:10px;font-size: 14px;margin-right: 15px;margin-left: 15px;text-align: justify;"><?php echo (isset($data_beban_investasi_ket_smt1[0]->keterangan_lap) ? $data_beban_investasi_ket_smt1[0]->keterangan_lap : '');?></p>

                                    <p style="margin-left:15px;font-size: 14px;font-weight: bold">Dokumen Semester I : 
                                    <a href="<?php echo site_url('semesteran/aspek_investasi/get_file/'.(isset($data_beban_investasi_ket_smt1[0]->id) ? $data_beban_investasi_ket_smt1[0]->id : ''));?>"><?php echo (isset($data_beban_investasi_ket_smt1[0]->file_lap) ? $data_beban_investasi_ket_smt1[0]->file_lap : '');?></a>
                                    </p>
                                    <br>
                                    <?php if(isset($data_beban_investasi_ket_smt2[0]->id) != "") :?>
                                    <p style="margin-left:10px;font-size: 14px;margin-right: 15px;margin-left: 15px;text-align: justify;"><?php echo (isset($data_beban_investasi_ket_smt2[0]->keterangan_lap) ? $data_beban_investasi_ket_smt2[0]->keterangan_lap : '');?></p>

                                    <p style="margin-left:15px;font-size: 14px;font-weight: bold">Dokumen Semester II : 
                                      <a href="<?php echo site_url('semesteran/aspek_investasi/get_file/'.(isset($data_beban_investasi_ket_smt2[0]->id) ? $data_beban_investasi_ket_smt2[0]->id : ''));?>"><?php echo (isset($data_beban_investasi_ket_smt2[0]->file_lap) ? $data_beban_investasi_ket_smt2[0]->file_lap : '');?></a>
                                    </p>
                                    <?php endif; ?>
                                </div>
                            </div>
                            <!-- end keterangan -->
                        </div>
                        <!-- /.box-body -->
                        <div class="box-footer with-border">
                           <div class="text-left">
                              <!--  <?php echo $paggination;?> -->
                           </div>
                        </div>
                        <div id="modal_invest1" class="modal fade" data-refresh="true" class="modal fade" tabindex="-1" role="dialog">
                           <div class="modal-dialog modal-lg">
                              <div class="modal-content">

                              </div>
                          </div>
                        </div>
                    </div>
                    <!-- Modal input/edit -->
                    <!-- /.box -->
                	</div>
               </div>
               <!-- /.col -->
            </div>
            <!-- row -->
<!-- MODAL KETERANGAN SMT-1-->
<div class="modal fade" id="Modal_ket_sm1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header bg-blue">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h5 class="modal-title" id="myModalLabel" style="font-weight:bold;margin-top:10px">KETERANGAN SEMESTER I</h5>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-md-12">
            <div class="form-group form-group-sm">
              <form class="form-horizontal" action="<?php echo base_url().'semesteran/aspek_investasi/save_keterangan'?>" method="post" enctype="multipart/form-data">
                <input type="hidden" name="<?=$this->security->get_csrf_token_name();?>" value="<?=$this->security->get_csrf_hash();?>" style="display: none">

                <input type="hidden" name="jns_lap" value="ket_lkai_beban_investasi">
                <input type="hidden" name="nmdok" value="Lkai_Beban_Investasi_Semester">
                <input type="hidden" name="semester" value="1">
                <div class="form-group">
                  <label class="col-sm-2 control-label" for="keterangan">Keterangan</label>
                  <div class="col-sm-10">
                    <textarea name="keterangan" class="form-control" style="height:130px;width:100%;" id="keterangan" rows="10"><?php echo (isset($data_beban_investasi_ket_smt1[0]->keterangan_lap) ? $data_beban_investasi_ket_smt1[0]->keterangan_lap : '');?></textarea>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label" for="keterangan">Unggah Dokumen</label>
                  <div class="col-sm-10">
                    <input type="hidden" name="id" value="<?php echo (isset($data_beban_investasi_ket_smt1[0]->id) ? $data_beban_investasi_ket_smt1[0]->id : '');?>">
                    <input type="hidden" name="filedata_lama" value="<?php echo (isset($data_beban_investasi_ket_smt1[0]->file_lap) ? $data_beban_investasi_ket_smt1[0]->file_lap : '');?>">
                    <input type="file" name="filedata">
                    <p style="margin-top:10px;">File harus bertipe pdf,doc atau docx.</p>
                    <a href="<?php echo site_url('semesteran/aspek_investasi/get_file/'.(isset($data_beban_investasi_ket_smt1[0]->id) ? $data_beban_investasi_ket_smt1[0]->id : ''));?>"><p><?php echo (isset($data_beban_investasi_ket_smt1[0]->file_lap) ? $data_beban_investasi_ket_smt1[0]->file_lap : '');?></p></a>
                  </div>
                </div>
                <div class="modal-footer with-border">
                  <div class="col-sm-12">
                    <?php if($level != "DJA"){?>
                      <button class="btn btn-warning btn-sm btn-flat pull-right" type="submit">
                        Simpan
                      </button>
                    <?php } ?>
                  </div>
                </div>
              </form>
              <!-- /form -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- MODAL KETERANGAN SMT-2-->
<div class="modal fade" id="Modal_ket_sm2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header bg-blue">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h5 class="modal-title" id="myModalLabel2" style="font-weight:bold;margin-top:10px">KETERANGAN SEMESTER II</h5>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-md-12">
            <div class="form-group form-group-sm">
              <form class="form-horizontal" action="<?php echo base_url().'semesteran/aspek_investasi/save_keterangan'?>" method="post" enctype="multipart/form-data">
                <input type="hidden" name="<?=$this->security->get_csrf_token_name();?>" value="<?=$this->security->get_csrf_hash();?>" style="display: none">

                <input type="hidden" name="jns_lap" value="ket_lkai_beban_investasi">
                <input type="hidden" name="semester" value="2">
                <input type="hidden" name="nmdok" value="Lkai_Beban_Investasi_Semester">
                <div class="form-group">
                  <label class="col-sm-2 control-label" for="keterangan">Keterangan</label>
                  <div class="col-sm-10">
                    <textarea name="keterangan" class="form-control" style="height:130px;width:100%;" id="keterangan" rows="10"><?php echo (isset($data_beban_investasi_ket_smt2[0]->keterangan_lap) ? $data_beban_investasi_ket_smt2[0]->keterangan_lap : '');?></textarea>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label" for="keterangan">Unggah Dokumen</label>
                  <div class="col-sm-10">
                    <input type="hidden" name="id" value="<?php echo (isset($data_beban_investasi_ket_smt2[0]->id) ? $data_beban_investasi_ket_smt2[0]->id : '');?>">
                    <input type="hidden" name="filedata" value="<?php echo (isset($data_beban_investasi_ket_smt2[0]->file_lap) ? $data_beban_investasi_ket_smt2[0]->file_lap : '');?>">
                    <input type="file" name="filedata">
                    <p style="margin-top:10px;">File harus bertipe pdf,doc atau docx.</p>
                    <a href="<?php echo site_url('semesteran/aspek_investasi/get_file/'.(isset($data_beban_investasi_ket_smt2[0]->id) ? $data_beban_investasi_ket_smt2[0]->id : ''));?>"><p><?php echo (isset($data_beban_investasi_ket_smt2[0]->file_lap) ? $data_beban_investasi_ket_smt2[0]->file_lap : '');?></p></a>
                  </div>
                </div>
                <div class="modal-footer with-border">
                  <div class="col-sm-12">
                    <?php if($level != "DJA"){?>
                      <button class="btn btn-warning btn-sm btn-flat pull-right" type="submit">
                        Simpan
                      </button>
                    <?php } ?>
                  </div>
                </div>
              </form>
              <!-- /form -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<script type="text/javascript">
    $(".select2nya").select2( { 'width':'100%' } );

    $('#tbl-invest-smt').DataTable({
        "paging":true,
        "searching": false,
        "ordering": false,
        "lengthChange": false,
    });


    var smt = $('#semester').val();
    if (smt != "") {
      if(smt == 1){
        $('.thn').text(tahun);
        $('.thn-filter').text(tahun-1);
        console.log(smt);
      }else{
        $('.thn').text(tahun);
        $('.thn-filter').text(tahun-1);
      }
    }else{
      $('.thn').text(tahun);
      $('.thn-filter').text(tahun-1);
    }
    
</script>
       
    