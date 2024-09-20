<?php
  $tahun = $this->session->userdata('tahun');
?>
<p style="margin-left:0px;margin-top:10px;margin-bottom:10px;font-weight: bold;font-size: 14px">     
    Aspek Operasional
</p>
<p style="margin-left:0px;margin-top:10px;margin-bottom:10px;font-weight: bold">     
    a) Nilai Tunai (Rekap)
</p>
<table cellpadding="4px" cellspacing="0px" border="1" autosize="1" style="color:#000;background:#fff;font-size: 12px;">
    <thead>
        <tr>
            <th rowspan="3" width="15%">Uraian</th>
            <th rowspan="2" colspan="2">RKA</th>
            <th colspan="4">Realisasi</th>
            <th rowspan="2" colspan="2">%Capaian Semester II terhadap RKA</th>
            <th rowspan="2" colspan="2">% Kenaikan/Penurunan </th>
        </tr>
        <tr>
            <th colspan="2">Tahun <?= $tahun; ?></th>
            <th colspan="2">Tahun <?= $tahun -1;?></th>
        </tr>
        <tr>
            <th>Jumlah Penerima</th>
            <th>Jumlah Pembayaran</th>
            <th>Jumlah Penerima</th>
            <th>Jumlah Pembayaran</th>
            <th>Jumlah Penerima</th>
            <th>Jumlah Pembayaran</th>
            <th>Jumlah Penerima</th>
            <th>Jumlah Pembayaran</th>
            <th>Jumlah Penerima</th>
            <th>Jumlah Pembayaran</th>
        </tr>
    </thead>
    <tbody>
        <?php if(isset($nilai_tunai_header) && is_array($nilai_tunai_header)):?>
        <?php foreach($nilai_tunai_header as $header):?>
        <tr>
            <td style="text-align: left;"><?=$header['uraian']?></td>
            <td style="text-align: right;"><?=($header['rka_penerima'] != 0 ) ? rupiah($header['rka_penerima']) : '-';?></td>
            <td style="text-align: right;"><?=($header['rka_pembayaran'] != 0 ) ? rupiah($header['rka_pembayaran']) : '-';?></td>
            <td style="text-align: right;"><?=($header['jml_penerima_thn'] != 0 ) ? rupiah($header['jml_penerima_thn']) : '-';?></td>
            <td style="text-align: right;"><?=($header['jml_pembayaran_thn'] != 0 ) ? rupiah($header['jml_pembayaran_thn']) : '-';?></td>
            <td style="text-align: right;"><?=($header['jml_penerima_thn_lalu'] != 0 ) ? rupiah($header['jml_penerima_thn_lalu']) : '-';?></td>
            <td style="text-align: right;"><?=($header['jml_pembayaran_thn_lalu'] != 0 ) ? rupiah($header['jml_pembayaran_thn_lalu']) : '-';?></td>
            <td style="text-align: right;"><?=($header['pers_penerimaan'] != 0 ) ? persen($header['pers_penerimaan']).'%' : '-';?></td>
            <td style="text-align: right;"><?=($header['pers_pembayaran'] != 0 ) ? persen($header['pers_pembayaran']).'%' : '-';?></td>
            <td style="text-align: right;"><?=($header['pers_kenaikan_penerima'] != 0 ) ? persen($header['pers_kenaikan_penerima']).'%' : '-';?></td>
            <td style="text-align: right;"><?=($header['pers_kenaikan_pembayaran'] != 0 ) ? persen($header['pers_kenaikan_pembayaran']).'%' : '-';?></td>
        
        </tr>
        <?php endforeach;?>
        <?php endif;?>
    </tbody>
</table>
<pagebreak></pagebreak>
<p style="margin-left:0px;margin-top:10px;margin-bottom:10px;font-weight: bold">     
    b) Nilai Tunai (Detail Cabang)
</p>
<table cellpadding="4px" cellspacing="0px" border="1" autosize="1" style="color:#000;background:#fff;font-size: 12px;">
    <thead>
        <tr>
            <th rowspan="2">Kantor Cabang</th>
            <th colspan="2">Tahun <?= $tahun; ?></th>
            <th colspan="2">Tahun <?= $tahun -1;?></th>
            <th colspan="2">% Kenaikan/Penurunan </th>
        </tr>
        <tr>
            <th>Jumlah Penerima</th>
            <th>Jumlah Pembayaran</th>
            <th>Jumlah Penerima</th>
            <th>Jumlah Pembayaran</th>
            <th>Jumlah Penerima</th>
            <th>Jumlah Pembayaran</th>
        </tr>
    </thead>
    <tbody>
        <?php if(isset($nilai_tunai_detail) && is_array($nilai_tunai_detail)):?>
        <?php foreach($nilai_tunai_detail as $detail):?>
            <tr>
                <td style="text-align: left;"><?=$detail['nama_cabang']?></td>
                <td style="text-align: right;"><?=($header['jml_penerima_thn'] != 0 ) ? rupiah($header['jml_penerima_thn']) : '-';?></td>
                <td style="text-align: right;"><?=($header['jml_pembayaran_thn'] != 0 ) ? rupiah($header['jml_pembayaran_thn']) : '-';?></td>
                <td style="text-align: right;"><?=($header['jml_penerima_thn_lalu'] != 0 ) ? rupiah($header['jml_penerima_thn_lalu']) : '-';?></td>
                <td style="text-align: right;"><?=($header['jml_pembayaran_thn_lalu'] != 0 ) ? rupiah($header['jml_pembayaran_thn_lalu']) : '-';?></td>
                <td style="text-align: right;"><?=($header['pers_kenaikan_penerima'] != 0 ) ? persen($header['pers_kenaikan_penerima']).'%' : '-';?></td>
                <td style="text-align: right;"><?=($header['pers_kenaikan_pembayaran'] != 0 ) ? persen($header['pers_kenaikan_pembayaran']).'%' : '-';?></td>
            </tr>
        <?php endforeach;?>
        <?php endif;?>
    </tbody>
</table>


<!-- <br> -->
<!-- data keterangan  -->
<!-- <div>
    <p style="margin-left:15px;font-size: 14px;font-weight: bold">Keterangan :</p>
    <p style="margin-left:10px;font-size: 12px;margin-right: 15px;margin-left: 15px;text-align: justify;"><?php echo (isset($data_hasil_investasi_ket[0]->keterangan_lap) ? $data_hasil_investasi_ket[0]->keterangan_lap : '');?></p>
</div> -->
<!-- end keterangan -->