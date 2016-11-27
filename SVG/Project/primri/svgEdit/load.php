<?

class TmpFileException extends Exception {
  public function __construct($message = NULL, $file = NULL) {
    if(empty($message)) {
      $message = "Unknown Exception";
    }
    if(!empty($file)) {
      unlink($file);
    }
    parent::__construct($message);
  }
}

function loadTmpImage($upload_file, $max_width = NULL, $max_height = NULL, $max_size = NULL) {
  $ext = array("jpeg", "gif", "png", "jpg", "pjpeg", "x-png");
  
  if(filesize($upload_file['tmp_name']) > $max_size) {
    throw new TmpFileException("File size biges ".$max_size." bytes", $upload_file['tmp_name']);
  }

  $type = $upload_file['type'];
  $type = str_replace("+xml", "", substr($type, strrpos($type, "/")+1));
  if(!in_array($type, $ext)) {
    throw new TmpFileException("Allow Extension: ".print_r($ext, true), $upload_file['tmp_name']);
  }
  $size = getimagesize($upload_file['tmp_name']);
  if(($size[0] > $max_width||$size[1] > $max_height) && $max_width != NULL && $max_height != NULL) {
    throw new TmpFileException("Image biges max width or height", $upload_file['tmp_name']);
  }
  $name = $_SERVER['DOCUMENT_ROOT']."/tmp/".basename($upload_file['tmp_name'], ".tmp").".".$type;
  if(!move_uploaded_file($upload_file['tmp_name'], $name)) {
    throw new TmpFileException("Can not move temp file", $upload_file['tmp_name']);
  }
  $img = str_replace($_SERVER['DOCUMENT_ROOT'], "", $name);
  return array($img, $size[0], $size[1]);
}
try {
  $img = loadTmpImage($_FILES['openimg'], 640, 480, 300 * 1024);
}
catch(TmpFileException $e) {
  exit($e->getMessage());
}
catch (Exception $e) {
  var_dump($e);
  exit;
}
?>
<script language="JavaScript">
  opener.paper.insertNewImage('<?=$img[0];?>', <?=$img[1];?>, <?=$img[2];?>);
  window.close();
</script>
