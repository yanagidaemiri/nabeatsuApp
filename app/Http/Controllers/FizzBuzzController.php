<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FizzBuzzController extends Controller
{
    public function index(Request $request)
    {
        // デフォルト値を削除
        $userInput = $request->input('userInput');

        // フォームが送信されていない場合はデフォルト値を設定
        if (empty($userInput)) {
            $userInput = 3;
        }

        $output = [];

        for ($i = 1; $i <= 100; $i++) {
            if ($i % $userInput == 0 || strpos((string)$i, (string)$userInput) !== false) {
                $output[] = '<span class="red-text">' . e($i . 'アオッ！') . '</span>';
            } else {
                $output[] = e($i);
            }
        }

        return view('index', compact('output'));
    }
}
