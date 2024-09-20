<div class="tab-content">
	<!-- Start Tab List Data Aset Temuan -->        
	<div class="tab-pane fade in active" id="beban_4" style="margin-bottom: 100px;">
		<p style="margin-left:10px;margin-top:20px;"></p>
		<div class="table-responsive">
			<table id="tbl-beban4" class="table table-responsive table-bordered table-hover" width="100%">
				<thead>
					<tr>
						<th rowspan="2" width="30%">Kantor Cabang</th>
						<th colspan="2">Penyelenggara Pensiun</th>
						<th colspan="2">Lainnya</th>
					</tr>
					<tr>
						<th>Jumlah</th>
						<th>% Persentase</th>
						<th>Jumlah</th>
						<th>% Persentase</th>
					</tr>

				</thead>
				<tbody>
					<?php if(isset($tenaga_kerja) && is_array($tenaga_kerja)):?>
					<?php foreach($tenaga_kerja as $data):?>
						<tr>
							<td style="text-align: left;"><?=$data['nama_cabang']?></td>
							<td><?=$data['jml_penyelenggaraan'];?></td>
							<td><?=rupiah($data['persen_penyelenggaraan']);?></td>
							<td><?=$data['jml_lain'];?></td>
							<td><?=rupiah($data['persen_lain']);?></td>
						</tr>
					<?php endforeach;?>
					<?php endif;?>
				</tbody>
			</table>
			<!-- data keterangan  -->
			<div style="padding:4px;">
				<p style="margin-left:15px;font-size: 18px;font-weight: bold">Keterangan :
				</p>
				<div style="padding:4px;border-style:groove;border-color:lightblue;">
					<p style="margin-left:10px;font-size: 14px;margin-right: 15px;margin-left: 15px;text-align: justify;"><?php echo (isset($data_beban_ket_thn[0]->keterangan_lap) ? $data_beban_ket_thn[0]->keterangan_lap : '');?></p>

					<p style="margin-left:15px;font-size: 14px;font-weight: bold">Dokumen : 
						<a href="<?php echo site_url('semesteran/aspek_operasional/get_file/'.(isset($data_beban_ket_thn[0]->id) ? $data_beban_ket_thn[0]->id : ''));?>"><?php echo (isset($data_beban_ket_thn[0]->file_lap) ? $data_beban_ket_thn[0]->file_lap : '');?></a>
					</p>
				</div>
			</div>
			<!-- end keterangan -->

			<div class="box-footer with-border">
				<div class="text-left">
					<!-- <?php echo $paggination;?> -->
				</div>
			</div>

		</div>
	</div>
</div>

<script type="text/javascript">
	
    $('#tbl-beban4').DataTable({
        "paging":true,
        "searching": false,
        "ordering": false,
        "lengthChange": false,
    });
</script>