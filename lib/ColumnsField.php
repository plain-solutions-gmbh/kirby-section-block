<?php

namespace Kirby\Form\Field;

class ColumnsField extends BlocksField
{
    protected $options;
    protected $style;

    public function __construct(array $params = [])
    {
        parent::__construct($params);

        $this->options = $params["options"] ?? [];
        $this->style = $params["style"] ?? [];
    }

    public function props(): array
    {
        return [
            "options" => $this->options,
            "style" => $this->style,
        ] + parent::props();
    }
}
