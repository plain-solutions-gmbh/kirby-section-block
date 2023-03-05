<?php

use microman\SectionBlock\Blueprints;
use Kirby\Form\Field\ColumnsField;

load([
    "microman\\SectionBlock\\Blueprints" => __DIR__ . "/lib/Blueprints.php",
    "Kirby\\Form\\Field\\ColumnsField" => __DIR__ . "/lib/ColumnsField.php",
]);

Kirby::plugin("microman/section-block", [
    "fields" => [
        "columns" => ColumnsField::class,
    ],

    "blueprints" => [
        "blocks/section" => Blueprints::Section(),
        "blocks/column" => Blueprints::Column(),
    ],

    "snippets" => [
        "blocks/section" => __DIR__ . "/snippets/blocks/section.php"
    ],

    "blockMethods" => [
        "column_width" => function ($type) {
            return Blueprints::getWidth($this->option(), $type);
        },

        "column_content" => function () {
            return $this->content()->content();
        },

        "toColumns" => function () {
            return $this->columns()->toBlocks();
        },
    ],
]);
