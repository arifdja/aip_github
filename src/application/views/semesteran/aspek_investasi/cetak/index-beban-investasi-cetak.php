<?php
  $tahun = $this->session->userdata('tahun');
  if ($semester != "") {
    if($semester == 1){
      $thn = $tahun;
      $thn_filter = $tahun - 1;
    }else{
      $thn = $tahun;
      $thn_filter = $tahun -1;
    }
  }else{
    $thn = $tahun;
    $thn_filter = $tahun -1;
  }
?>
<p style="margin-left:0px;margin-top:10px;margin-bottom:10px;font-weight: bold;font-size: 14px">     
  Aspek Investasi
</p>
<p style="margin-left:0px;margin-top:10px;margin-bottom:10px;font-weight: bold">     
  c) Beban Investasi
</p>

<!-- ======================================================SEMESTER 2 ================================ -->
<?php if($semester == 2 || $semester == ""):?>
<table cellpadding="4px" cellspacing="0px" border="1" autosize="1" style="color:#000;background:#fff;font-size: 12px;">
  <thead>
    <tr>
      <th rowspan="2" width="30%">Uraian Beban Investasi</th>
      <th rowspan="2">Saldo Akhir Semester II <?= $thn_filter;?></th>
      <th rowspan="2">Saldo Akhir Semester II <?= $thn; ?></th>
      <th colspan="2">Kenaikan/Penurunan</th>
      <th rowspan="2">RKA</th>
      <th rowspan="2">Capaian Semester II terhadap RKAP</th>
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
          <td style="text-align:right;"><?=($beban['saldo_akhir_smt2'] != 0 ) ? rupiah($beban['saldo_akhir_smt2']) : '-';?></td>
          <td style="text-align:right;"><?=($beban['saldo_akhir_smt1'] != 0 ) ? rupiah($beban['saldo_akhir_smt1']) : '-';?></td>
          <td style="text-align:right;"><?=($beban['nominal'] != 0 ) ? rupiah($beban['nominal']) : '-';?></td>
          <td style="text-align:right;"><?=($beban['persentase'] != 0 ) ? persen($beban['persentase']).'%' : '-';?></td>
          <td style="text-align:right;"><?=($beban['rka'] != 0 ) ? rupiah($beban['rka']) : '-';?></td>
          <td style="text-align:right;"><?=($beban['pers_rka'] != 0 ) ? persen($beban['pers_rka']).'%' : '-';?></td>

        </tr>
      <?php endif;?>
      <?php foreach($beban['child'] as $child):?>
        <?php if($child['type'] == 'PC'):?>
          <tr>
            <td style="text-align:left"><?= $child['jenis_investasi']?></td>
            <td style="text-align:right;"><?=($child['saldo_akhir_smt2'] != 0 ) ? rupiah($child['saldo_akhir_smt2']) : '-';?></td>
            <td style="text-align:right;"><?=($child['saldo_akhir_smt1'] != 0 ) ? rupiah($child['saldo_akhir_smt1']) : '-';?></td>
            <td style="text-align:right;"><?=($child['nominal'] != 0 ) ? rupiah($child['nominal']) : '-';?></td>
            <td style="text-align:right;"><?=($child['persentase'] != 0 ) ? persen($child['persentase']).'%' : '-';?></td>
            <td style="text-align:right;"><?=($child['rka'] != 0 ) ? rupiah($child['rka']) : '-';?></td>
            <td style="text-align:right;"><?=($child['pers_rka'] != 0 ) ? persen($child['pers_rka']).'%' : '-';?></td>
          </tr>
        <?php endif;?>
        <?php foreach($child['subchild'] as $subchild):?>
          <tr>
           <td style="text-align:left; padding-left: 30px; color: #6c7275;"><?='- '.$subchild['jenis_investasi']?></td>
           <td style="text-align:right;"><?=($subchild['saldo_akhir_smt2'] != 0 ) ? rupiah($subchild['saldo_akhir_smt2']) : '-';?></td>
           <td style="text-align:right;"><?=($subchild['saldo_akhir_smt1'] != 0 ) ? rupiah($subchild['saldo_akhir_smt1']) : '-';?></td>
           <td style="text-align:right;"><?=($subchild['nominal'] != 0 ) ? rupiah($subchild['nominal']) : '-';?></td>
           <td style="text-align:right;"><?=($subchild['persentase'] != 0 ) ? persen($subchild['persentase']).'%' : '-';?></td>
           <td style="text-align:right;"><?=($subchild['rka'] != 0 ) ? rupiah($subchild['rka']) : '-';?></td>
           <td style="text-align:right;"><?=($subchild['pers_rka'] != 0 ) ? persen($subchild['pers_rka']).'%' : '-';?></td>
         </tr>
       <?php endforeach;?>
     <?php endforeach;?>


   <?php endforeach;?>
 <?php endif;?>
</tbody>
<tr style="background-color: #d8d8d8; font-weight: bold;">
  <td>Total</td>
  <td style="text-align:right;"><?=($sum['saldo_akhir_smt2'] != 0 ) ? rupiah($sum['saldo_akhir_smt2']) : '-';?></td>
  <td style="text-align:right;"><?=($sum['saldo_akhir_smt1'] != 0 ) ? rupiah($sum['saldo_akhir_smt1']) : '-';?></td>
  <!-- <td style="text-align:right;"><?=($sum['rka'] != 0 ) ? rupiah($sum['rka']) : '-';?></td> -->
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>
</table>
<?php endif;?>


<!-- ======================================================SEMESTER 1 ================================ -->
<?php if($semester == 1 ):?>
<table cellpadding="4px" cellspacing="0px" border="1" autosize="1" style="color:#000;background:#fff;font-size: 12px;">
  <thead>
    <tr>
      <th rowspan="2" width="30%">Uraian Beban Investasi</th>
      <th rowspan="2">Saldo Akhir Semester I <?= $thn_filter;?></th>
      <th rowspan="2">Saldo Akhir Semester I <?= $thn; ?></th>
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
          <td style="text-align:right;"><?=($beban['saldo_akhir_smt2'] != 0 ) ? rupiah($beban['saldo_akhir_smt2']) : '-';?></td>
          <td style="text-align:right;"><?=($beban['saldo_akhir_smt1'] != 0 ) ? rupiah($beban['saldo_akhir_smt1']) : '-';?></td>
          <td style="text-align:right;"><?=($beban['nominal'] != 0 ) ? rupiah($beban['nominal']) : '-';?></td>
          <td style="text-align:right;"><?=($beban['persentase'] != 0 ) ? persen($beban['persentase']).'%' : '-';?></td>
          <td style="text-align:right;"><?=($beban['rka'] != 0 ) ? rupiah($beban['rka']) : '-';?></td>
          <td style="text-align:right;"><?=($beban['pers_rka'] != 0 ) ? persen($beban['pers_rka']).'%' : '-';?></td>

        </tr>
      <?php endif;?>
      <?php foreach($beban['child'] as $child):?>
        <?php if($child['type'] == 'PC'):?>
          <tr>
            <td style="text-align:left"><?= $child['jenis_investasi']?></td>
            <td style="text-align:right;"><?=($child['saldo_akhir_smt2'] != 0 ) ? rupiah($child['saldo_akhir_smt2']) : '-';?></td>
            <td style="text-align:right;"><?=($child['saldo_akhir_smt1'] != 0 ) ? rupiah($child['saldo_akhir_smt1']) : '-';?></td>
            <td style="text-align:right;"><?=($child['nominal'] != 0 ) ? rupiah($child['nominal']) : '-';?></td>
            <td style="text-align:right;"><?=($child['persentase'] != 0 ) ? persen($child['persentase']).'%' : '-';?></td>
            <td style="text-align:right;"><?=($child['rka'] != 0 ) ? rupiah($child['rka']) : '-';?></td>
            <td style="text-align:right;"><?=($child['pers_rka'] != 0 ) ? persen($child['pers_rka']).'%' : '-';?></td>
          </tr>
        <?php endif;?>
        <?php foreach($child['subchild'] as $subchild):?>
          <tr>
           <td style="text-align:left; padding-left: 30px; color: #6c7275;"><?='- '.$subchild['jenis_investasi']?></td>
           <td style="text-align:right;"><?=($subchild['saldo_akhir_smt2'] != 0 ) ? rupiah($subchild['saldo_akhir_smt2']) : '-';?></td>
           <td style="text-align:right;"><?=($subchild['saldo_akhir_smt1'] != 0 ) ? rupiah($subchild['saldo_akhir_smt1']) : '-';?></td>
           <td style="text-align:right;"><?=($subchild['nominal'] != 0 ) ? rupiah($subchild['nominal']) : '-';?></td>
           <td style="text-align:right;"><?=($subchild['persentase'] != 0 ) ? persen($subchild['persentase']).'%' : '-';?></td>
           <td style="text-align:right;"><?=($subchild['rka'] != 0 ) ? rupiah($subchild['rka']) : '-';?></td>
           <td style="text-align:right;"><?=($subchild['pers_rka'] != 0 ) ? persen($subchild['pers_rka']).'%' : '-';?></td>
         </tr>
       <?php endforeach;?>
     <?php endforeach;?>


   <?php endforeach;?>
 <?php endif;?>
</tbody>
<tr style="background-color: #d8d8d8; font-weight: bold;">
  <td>Total</td>
  <td style="text-align:right;"><?=($sum['saldo_akhir_smt2'] != 0 ) ? rupiah($sum['saldo_akhir_smt2']) : '-';?></td>
  <td style="text-align:right;"><?=($sum['saldo_akhir_smt1'] != 0 ) ? rupiah($sum['saldo_akhir_smt1']) : '-';?></td>
  <!-- <td style="text-align:right;"><?=($sum['rka'] != 0 ) ? rupiah($sum['rka']) : '-';?></td> -->
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>
</table>
<?php endif;?>