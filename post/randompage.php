<?php

include_once "simple_html_dom.php";

function getList()
{
    // Get the HTML of the article page..
    $html = file_get_html('https://en.wikipedia.org/wiki/Special:Random');
    $paragraphs = "";

    // merge all paragraph text into one long string..
    foreach ($html->find('p') as $element) {
        $paragraphs .= $element->plaintext;
    }

    // break up that string into words and add each word into a array...
    $words = explode(" ", $paragraphs);
    $new_words = [];

    // remove all words that include numbers or symbols, also remove duplicates..
    for ($i = 0; $i < count($words); $i++) {
        if (preg_match("/^[a-zA-Z]+$/", $words[$i]) === 0) {
            continue;
        }

        if (in_array(strtolower($words[$i]), $new_words)) {
            continue;
        }

        array_push($new_words, strtolower($words[$i]));
    }

    // return list of words..
    return $new_words;
}

function sendList(){
    $list = getList();

    if (count($list) < 20){
        return sendList();
    }

    return json_encode($list);
}

echo sendList();

?>