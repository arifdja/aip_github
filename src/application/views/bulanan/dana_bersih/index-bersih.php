<!-- Main content -->
<style type="text/css">
	td.left{
		text-align: left;
		margin-left: 35px;
	}
	td.right{
		text-align: right;
	}
</style>
<?php $level = $this->session->userdata('level');?>
<?php $tahun = $this->session->userdata('tahun');?>
<div class="row">
	<div class="col-xs-12">
		<div class="nav-tabs-custom">
			<?php $this->load->view('main/nav_tab_view'); ?>
			<div class="box box-default">
				<div class="box-header with-border">
					<h3 class="box-title">Dana Bersih</h3>
					<p class="box-title pull-right" style="margin-right:20px"><i class="fa fa-calendar"></i>&nbsp;&nbsp;<?php echo (isset($bulan[0]->nama_bulan) ? $bulan[0]->nama_bulan : '').' - '. $tahun;?></p>
				</div>
				<!-- /.box-header -->
				<div class="box-body" style="overflow-x:auto;">
					<div class="col-md-12">
						<div class="row">
							<div class="col-md-3">
								<div class="form-group adm">
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
							<div class="col-md-1">
								<div class="form-group adm">
									<a href="javascript:void(0)" title="Add" class="btn btn-primary btn-sm btn-flat" onClick="gensearch('index-danabersih','index-danabersih');">
										<i class="fa fa-search"></i>
									</a> 
								</div>
							</div>
							<div  class="col-md-8"> 
								<div class="form-group pull-right">
									<a href="javascript:void(0)" title="Add" class="btn btn-primary btn-sm btn-flat user-bln" onClick="genform('add', 'danabersih_kewajiban','danabersih_kewajiban');">
										<i class="fa fa-plus"></i>&nbsp;&nbsp;Tambah
									</a>  
									&nbsp;&nbsp;
									<a href="#" data-target="#Modal_ket1" data-toggle="modal" class="btn btn-sm btn-warning btn-flat user-bln" title="Keterangan"><i class="fa fa-info-circle"></i> Keterangan
									</a>

									&nbsp;&nbsp;
									<!-- <a href="<?php echo site_url('bulanan/dana_bersih/laporan_DanaBersih_PDF').get_uri();?>" target="blank" class="btn btn-sm btn-danger btn-flat"><i class="fa fa-file-pdf-o"></i>&nbsp;&nbsp;Export PDF
									</a> -->
									<a href="javascript:void(0)" title="Add" class="btn btn-danger btn-sm btn-flat" onClick="genform('print-all', 'dana_bersih_cetak','dana_bersih_cetak');">
										<i class="fa fa-file-pdf-o"></i>&nbsp;&nbsp;Cetak PDF
									</a>  
								</div>
							</div>
						</div>
					</div>
					<?php if($this->session->flashdata('form_true')){?>
						<div id="notif">               
							<?php echo $this->session->flashdata('form_true');?>               
						</div>
					<?php } ?>

					<table id="example" class="table table-responsive table-bordered table-hover">
						<thead>
							<tr>
								<th width="40%">URAIAN</th>
								<th width="27%">Data Akhir Periode &nbsp;<?=$bulan[0]->nama_bulan?></th>
    							<th width="27%">Data Akhir Periode Bulan Lalu</th>
							</tr>

						</thead>
						<tbody>
							<?php
								// $tot = 0;
								// $tot_prev = 0;
							?>
							<?php if(isset($data_dana_bersih) && is_array($data_dana_bersih)):?>
								<?php foreach($data_dana_bersih as $dana_bersih):?>
									<?php if($dana_bersih['jenis_laporan'] == 'ASET'):?>
									<tr style="font-weight: bold; background-color:#c1e1f3;font-size: 14px;">
										<td style="text-align: left;color: #303a3f;" colspan="3"><?=$dana_bersih['jenis_laporan']?></td>
									</tr>
									<?php endif;?>
										<?php foreach($dana_bersih['child'] as $child):?>
											<tr>
												<td style="text-align: left; background-color:#d2ebf9;font-size: 14px;" colspan="3"><?=$child['judul_head']?></td>
											</tr>
											<?php foreach($child['subchild'] as $subchild):?>

												<?php if($subchild['type'] == 'PC'):?>
												<tr>
													<td class="left" style="padding-left: 25px;"><?=$subchild['jenis_investasi']?></td>
													<td class="right"></td>
													<td class="right"></td>
												</tr>
												<?php else:?>
												<tr>
													<td class="left" style="padding-left: 25px;"><?=$subchild['jenis_investasi']?></td>
													<td class="right"><?=($subchild['saldo_akhir'] != 0 ) ? rupiah($subchild['saldo_akhir']) : '-';?></td>
													<td class="right"><?=($subchild['saldo_akhir_bln_lalu'] != 0 ) ? rupiah($subchild['saldo_akhir_bln_lalu']) : '-';?></td>
												</tr>
												<?php endif;?>

												<?php if($subchild['type'] == 'PC'):?>
													<?php foreach($subchild['subchild_sub'] as $subchild3):?>
														<tr>
															<td class="left" style="padding-left: 50px; color: #6c7275;"><?='- '.$subchild3['jenis_investasi']?></td>
															<td class="right"><?=($subchild3['saldo_akhir'] != 0 ) ? rupiah($subchild3['saldo_akhir']) : '-';?></td>
															<td class="right"><?=($subchild3['saldo_akhir_bln_lalu'] != 0 ) ? rupiah($subchild3['saldo_akhir_bln_lalu']) : '-';?></td>
														</tr>
													<?php endforeach;?>
												<?php endif;?>
											<?php endforeach;?>
											<tr style="font-weight: bold;">
												<td style="text-align: left; background-color:#e6f5fe;font-size: 14px;"><?=$child['judul_total']?></td>

												<td style="text-align: right; background-color:#e6f5fe;"><?=($child['sum_lvl2'] != 0 ) ? rupiah($child['sum_lvl2']) : '-';?></td>
												<td style="text-align: right; background-color:#e6f5fe;"><?=($child['sum_prev_lvl2'] != 0 ) ? rupiah($child['sum_prev_lvl2']) : '-';?></td>
												
											</tr>
										<?php endforeach;?>

										<?php if($dana_bersih['jenis_laporan'] == 'ASET'):?>
										<tr style="font-weight: bold; background-color:#c1e1f3;">
											<td class="left"><?=$dana_bersih['total']?></td>
											<td class="right"><?=($dana_bersih['sum_lvl1'] != 0 ) ? rupiah($dana_bersih['sum_lvl1']) : '-';?></td>
											<td class="right"><?=($dana_bersih['sum_prev_lvl1'] != 0 ) ? rupiah($dana_bersih['sum_prev_lvl1']) : '-';?></td>
										</tr>

										<?php endif;?>
										
								<?php endforeach;?>
							<?php endif;?>
							<?php
								$saldo_akhir1 = (!empty($total_bersih[0]->saldo_akhir) ? $total_bersih[0]->saldo_akhir : '0');
								$saldo_akhir2 = (!empty($total_bersih[1]->saldo_akhir) ? $total_bersih[1]->saldo_akhir : '0');
								$saldo_akhir_bln_lalu1 = (!empty($total_bersih[0]->saldo_akhir_bln_lalu) ? $total_bersih[0]->saldo_akhir_bln_lalu : '0');
								$saldo_akhir_bln_lalu2 = (!empty($total_bersih[1]->saldo_akhir_bln_lalu) ? $total_bersih[1]->saldo_akhir_bln_lalu : '0');

								$tot = $saldo_akhir1 - $saldo_akhir2;
								$tot_prev = $saldo_akhir_bln_lalu1 - $saldo_akhir_bln_lalu2;

							?>
							<tr style="font-weight: bold; background-color:#d2ebf9;">
								<td style="text-align: left;">DANA BERSIH</td>
								<td style="text-align: right;"><?=($tot != 0 ) ? rupiah($tot) : '-';?></td>
								<td style="text-align: right;"><?=($tot_prev != 0 ) ? rupiah($tot_prev) : '-';?></td>
							</tr>
			
						</tbody>
					</table>
					<br>
					<!-- data keterangan  -->
					<div style="padding:4px;">

						<p style="margin-left:0px;font-size: 18px;font-weight: bold">Keterangan </p>
						<div style="padding:4px;border-style:groove;border-color:lightblue;">
							<p style="margin-left:0px;font-size: 14px;margin-right: 0px;margin-left: 0px;text-align: justify;"><?php echo (isset($data_dana_bersih_ket[0]->keterangan_lap) ? $data_dana_bersih_ket[0]->keterangan_lap : '');?></p>

							<p style="margin-left:0px;font-size: 14px;font-weight: bold">Dokumen :  <a href="<?php echo site_url('bulanan/dana_bersih/get_file/'.(isset($data_dana_bersih_ket[0]->id) ? $data_dana_bersih_ket[0]->id : '').get_uri());?>"><p><?php echo (isset($data_dana_bersih_ket[0]->file_lap) ? $data_dana_bersih_ket[0]->file_lap : '');?></p></a></p>
						</div>
					</div>
					<!-- end keterangan -->
				</div>
				<!-- /.box-body -->

				<div id="modal_invest" class="modal fade" data-refresh="true" class="modal fade" tabindex="-1" role="dialog">
					<div class="modal-dialog">
						<div class="modal-content">

						</div>
					</div>
				</div>
				<div id="modal_invest1" class="modal fade" data-refresh="true" class="modal fade" tabindex="-1" role="dialog">
					<div class="modal-dialog">
						<div class="modal-content">

						</div>
					</div>
				</div>
			</div>
			<!-- /.box -->
		</div>
	</div>
	<!-- /.col -->
</div>
<!-- row -->

<!-- MODAL KETERANGAN -->
<div class="modal fade" id="Modal_ket1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header bg-blue">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h5 class="modal-title" id="myModalLabel" style="font-weight:bold;margin-top:10px">KETERANGAN</h5>
			</div>
			<div class="modal-body">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group form-group-sm">
							<form class="form-horizontal" action="<?php echo base_url().'bulanan/dana_bersih/save_keterangan'?>" method="post" enctype="multipart/form-data">
								<input type="hidden" name="<?=$this->security->get_csrf_token_name();?>" value="<?=$this->security->get_csrf_hash();?>" style="display: none">
								<input type="hidden" name="jns_lap" value="ket_dana_bersih">
                				<input type="hidden" name="nmdok" value="Dana_Bersih">
								<div class="form-group">
									<label class="col-sm-2 control-label" for="keterangan">Keterangan</label>
									<div class="col-sm-10">
										<textarea name="keterangan" class="form-control" style="height:130px;width:100%;" id="keterangan" rows="10"><?php echo (isset($data_dana_bersih_ket[0]->keterangan_lap) ? $data_dana_bersih_ket[0]->keterangan_lap : '');?></textarea>
									</div>
								</div>
								<div class="form-group">
									<label class="col-sm-2 control-label" for="keterangan">Unggah Dokumen</label>
									<div class="col-sm-10">
										<input type="hidden" name="id" value="<?php echo (isset($data_dana_bersih_ket[0]->id) ? $data_dana_bersih_ket[0]->id : '');?>">
										<input type="hidden" name="filedata" value="<?php echo (isset($data_dana_bersih_ket[0]->file_lap) ? $data_dana_bersih_ket[0]->file_lap : '');?>">
										<input type="hidden" name="filedata_lama" value="<?php echo (isset($data_dana_bersih_ket[0]->file_lap) ? $data_dana_bersih_ket[0]->file_lap : '');?>">
										<input type="file" name="filedata">
										<p style="margin-top:10px;">File harus bertipe pdf,doc atau docx.</p>
										<a href="<?php echo site_url('bulanan/dana_bersih/get_file/'.(isset($data_dana_bersih_ket[0]->id) ? $data_dana_bersih_ket[0]->id : '').get_uri());?>"><p><?php echo (isset($data_dana_bersih_ket[0]->file_lap) ? $data_dana_bersih_ket[0]->file_lap : '');?></p></a>
									</div>
								</div>
								<div class="modal-footer with-border">
									<div class="col-sm-12">
										<button class="btn btn-warning btn-sm btn-flat pull-right user-bln" type="submit">
											Simpan
										</button>
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
</script>


