 <!-- Main content -->
 <?php $level = $this->session->userdata('level');?>
            <?php $tahun = $this->session->userdata('tahun');?>
            <div class="row">
                <div class="col-xs-12">
				  <div class="nav-tabs-custom">
                    <?php $this->load->view('main/nav_tab_input_tahunan'); ?>
                    <div class="box box-default">
                        <div class="box-header with-border">
                            <!-- <h3 class="box-title">Peserta Aktif</h3> -->
 					        <p class="box-title pull-right" style="margin-right:20px"><i class="fa fa-calendar"></i>&nbsp;&nbsp; Tahunan</p>
                        </div>
                        <!-- /.box-header -->
                        <div class="box-body">
                            <table id="example" class="table table-responsive table-bordered table-hover">
                                <thead>
									<tr>
                                        <th>No.</th>
                                        <th>Cabang</th>
                                        <th>Kelompok</th>
    									<th>Jumlah</th>
									</tr>
                                </thead>
                                <tbody>
                                    <?php 
                                    $i =1;
                                    $total_peserta = 0;
                                    $total_rka = 0;
                                    foreach($data as $value):
                                    $total_peserta += $value['jumlah'];
                                    ?>
                                        <tr>
                                            <td style="text-align: left;"><?=$i;?></td>
                                            <td style="text-align: left;"><?=$value['nama_cabang']?></td>
                                            <td style="text-align: left;"><?=$value['kelompok_peserta']?></td>
                                            <td style="text-align: right;"><?=$value['jumlah']?></td>
                                        </tr>
                                    <?php $i++; endforeach;?>
                                    <tr>
                                        <td style="text-align: center" colspan="3"><strong>Total</strong></td>
                                        <td><strong><?=$total_peserta?></strong></td>
                                    </tr>
                              </tbody>
                            </table>
                            <br>
                        </div>
                        <!-- /.box-body -->
                    </div>
                    <!-- Modal input/edit -->
                    <!-- /.box -->
                	</div>
               </div>
               <!-- /.col -->
            </div>
            <!-- row -->
           

<script type="text/javascript">

    $('#example').DataTable({
        "paging":true,
        "searching": true,
        "ordering": true,
        "lengthChange": true,
    });
    
</script>

       
    