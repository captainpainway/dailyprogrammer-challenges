<?php

class Main {
    public $commands = ["button_clicked", "cycle_complete", "button_clicked", "button_clicked", "button_clicked", "button_clicked", "button_clicked", "cycle_complete"];

    public function click() {
        $state = "CLOSED";
        echo "Door: ".$state."\n";

        foreach ($this->commands as $value) {
            if ($value == "button_clicked") {
                switch ($state) {
                    case "CLOSED":
                    case "STOPPED_WHILE_CLOSING":
                        $state = "OPENING";
                        break;
                    case "CLOSING":
                        $state = "STOPPED_WHILE_CLOSING";
                        break;
                    case "OPEN":
                    case "STOPPED_WHILE_OPENING":
                        $state = "CLOSING";
                        break;
                    case "OPENING":
                        $state = "STOPPED_WHILE_OPENING";
                        break;
                }
            } else {
                switch ($state) {
                    case "CLOSING":
                        $state = "CLOSED";
                        break;
                    case "OPENING":
                        $state = "OPEN";
                        break;
                }
            }
            $value = str_replace('_', ' ', ucfirst($value));
	    echo "> ".$value.".\nDoor: ".$state."\n";
        }
    }
}

$main = new Main;
echo $main->click();
?>
