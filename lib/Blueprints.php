<?php

namespace microman\SectionBlock;

use Kirby\Cms\Blueprint;
use Kirby\Filesystem\Dir;
use Kirby\Data\Yaml;
use Kirby\Toolkit\Str;
use microman\SectionBlock\WidthItem;

class Blueprints
{
    public static function Section()
    {
        $out = [
            "name" => "Section",
            "icon" => "col",
            "wysiwyg" => "true",
            "fields" => [
                "beta" => [
                    "label" => "Kirby Section Block",
                    "type" => "info",
                    "theme" => "negative",
                    "text" =>
                        'This is currently a beta version: Use it at your own risk! Check for stable releases on <a href="https://github.com/youngcut/kirby-section-block" target="_blank">GitHub</a>.',
                    ]
                ]
            ];

        $out = static::extendCustom($out, "sections");

        $out["fields"]["columns"] = [
            "type" => "columns",
            "pretty" => true,
            "fieldsets" => ["column"],
            "options" => static::getOptions(),
        ];

        //dump($out);
        return $out;
    }

    private static function extendCustom($default, $type)
    {
        try {
            return array_merge_recursive(
                $default,
                Blueprint::find("fields/" . $type)
            );
        } catch (\Throwable $th) {
            return $default;
        }
    }

    private static function getOptions($filter = null)
    {
        $out = [];
        $path = kirby()->root("blueprints") . "/columns";

        if (!Dir::exists($path)) {
            $path = __DIR__ . "/../blueprints/columns";
        }

        if (is_string($filter)) {
            return Yaml::read($path."/{$filter}.yml");
        }
        
        $files = Dir::read($path, [], true);

        if (is_array($filter)) {
            $files = array_filter($files, function($f) use ($filter) {
                return in_array(pathinfo($f)["filename"], $filter);
            });
        }

        foreach ($files as $f) {
            $col = Yaml::read($f);
            $name = pathinfo($f)["filename"];

            $col["title"] ??= Str::studly($name);
            $col["icon"] ??= "columns";
            $col["width"] ??= "1/1";

            $out[$name] = $col;
        }

        return $out;
    }

    public static function getWidth($index, $separator = null)
    {

        $width = static::getOptions($index)["width"] ?? "1/1";

        if (is_null($separator)) {
            return $width;
        }

        $splited_width = explode("/", $width);

        if (is_int($separator)) {
            return round(
                ($separator * intval($splited_width[0])) / intval($splited_width[1]),
                2
            );
        }

        return implode($separator, $splited_width);
    }

    public static function Column()
    {
        $out = [
            "type" => "column",
            "icon" => "columns",
            "title" => "Column",
            "wysiwyg" => 1,
            "fields" => [
                "content" => ["type" => "blocks"],
                "option" => ["type" => "hidden"],
            ],
        ];

        return static::extendCustom($out, "columns");
    }
}
