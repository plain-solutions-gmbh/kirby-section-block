<?php /** @var \Kirby\Cms\Block $block */ ?>

<section style="display:flex; flex-wrap:wrap;">

<?php foreach ($block->toColumns() as $column): ?>

    <div style="flex:1 1 <?= $column->column_width(100) ?>%;">

        <?php foreach ($column->column_content()->toBlocks() as $content): ?>
            <?= $content ?>
        <?php endforeach ?>

    </div>

<?php endforeach ?>