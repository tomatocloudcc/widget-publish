"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const handleNumberClick = (number: string) => {
    if (display === '0' || waitingForNewValue) {
      setDisplay(number);
      setWaitingForNewValue(false);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperationClick = (op: string) => {
    const currentValue = parseFloat(display);
    
    if (previousValue !== null && operation) {
      const result = calculateResult();
      setDisplay(String(result));
      setPreviousValue(result);
    } else {
      setPreviousValue(currentValue);
    }
    
    setOperation(op);
    setWaitingForNewValue(true);
  };

  const calculateResult = (): number => {
    const currentValue = parseFloat(display);
    
    if (previousValue === null || operation === null) return currentValue;

    switch (operation) {
      case '+':
        return previousValue + currentValue;
      case '-':
        return previousValue - currentValue;
      case '×':
        return previousValue * currentValue;
      case '÷':
        return previousValue / currentValue;
      default:
        return currentValue;
    }
  };

  const handleEqualsClick = () => {
    const result = calculateResult();
    setDisplay(String(result));
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(true);
  };

  const handleClearClick = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  const handlePercentageClick = () => {
    const currentValue = parseFloat(display);
    setDisplay(String(currentValue / 100));
  };

  const handleToggleSignClick = () => {
    const currentValue = parseFloat(display);
    setDisplay(String(-currentValue));
  };

  return (
    <Card className="w-80 bg-gray-800 text-white rounded-lg shadow-lg">
      {/* 显示屏 */}
      <div className="p-4">
        <div className="text-right text-4xl font-light h-16 flex items-end justify-end">
          {display}
        </div>
      </div>

      {/* 按钮区域 */}
      <div className="grid grid-cols-4 gap-2 p-4">
        {/* 第一行 */}
        <Button
          variant="outline"
          className="h-16 bg-gray-600 hover:bg-gray-500 text-white border-gray-600"
          onClick={handleClearClick}
        >
          AC
        </Button>
        <Button
          variant="outline"
          className="h-16 bg-gray-600 hover:bg-gray-500 text-white border-gray-600"
          onClick={handleToggleSignClick}
        >
          +/-
        </Button>
        <Button
          variant="outline"
          className="h-16 bg-gray-600 hover:bg-gray-500 text-white border-gray-600"
          onClick={handlePercentageClick}
        >
          %
        </Button>
        <Button
          variant="outline"
          className="h-16 bg-orange-500 hover:bg-orange-400 text-white border-orange-500"
          onClick={() => handleOperationClick('÷')}
        >
          ÷
        </Button>

        {/* 第二行 */}
        <Button
          variant="outline"
          className="h-16 bg-gray-700 hover:bg-gray-600 text-white border-gray-700"
          onClick={() => handleNumberClick('7')}
        >
          7
        </Button>
        <Button
          variant="outline"
          className="h-16 bg-gray-700 hover:bg-gray-600 text-white border-gray-700"
          onClick={() => handleNumberClick('8')}
        >
          8
        </Button>
        <Button
          variant="outline"
          className="h-16 bg-gray-700 hover:bg-gray-600 text-white border-gray-700"
          onClick={() => handleNumberClick('9')}
        >
          9
        </Button>
        <Button
          variant="outline"
          className="h-16 bg-orange-500 hover:bg-orange-400 text-white border-orange-500"
          onClick={() => handleOperationClick('×')}
        >
          ×
        </Button>

        {/* 第三行 */}
        <Button
          variant="outline"
          className="h-16 bg-gray-700 hover:bg-gray-600 text-white border-gray-700"
          onClick={() => handleNumberClick('4')}
        >
          4
        </Button>
        <Button
          variant="outline"
          className="h-16 bg-gray-700 hover:bg-gray-600 text-white border-gray-700"
          onClick={() => handleNumberClick('5')}
        >
          5
        </Button>
        <Button
          variant="outline"
          className="h-16 bg-gray-700 hover:bg-gray-600 text-white border-gray-700"
          onClick={() => handleNumberClick('6')}
        >
          6
        </Button>
        <Button
          variant="outline"
          className="h-16 bg-orange-500 hover:bg-orange-400 text-white border-orange-500"
          onClick={() => handleOperationClick('-')}
        >
          -
        </Button>

        {/* 第四行 */}
        <Button
          variant="outline"
          className="h-16 bg-gray-700 hover:bg-gray-600 text-white border-gray-700"
          onClick={() => handleNumberClick('1')}
        >
          1
        </Button>
        <Button
          variant="outline"
          className="h-16 bg-gray-700 hover:bg-gray-600 text-white border-gray-700"
          onClick={() => handleNumberClick('2')}
        >
          2
        </Button>
        <Button
          variant="outline"
          className="h-16 bg-gray-700 hover:bg-gray-600 text-white border-gray-700"
          onClick={() => handleNumberClick('3')}
        >
          3
        </Button>
        <Button
          variant="outline"
          className="h-16 bg-orange-500 hover:bg-orange-400 text-white border-orange-500"
          onClick={() => handleOperationClick('+')}
        >
          +
        </Button>

        {/* 第五行 */}
        <Button
          variant="outline"
          className="h-16 col-span-2 bg-gray-700 hover:bg-gray-600 text-white border-gray-700"
          onClick={() => handleNumberClick('0')}
        >
          0
        </Button>
        <Button
          variant="outline"
          className="h-16 bg-gray-700 hover:bg-gray-600 text-white border-gray-700"
          onClick={() => handleNumberClick('.')}
        >
          .
        </Button>
        <Button
          variant="outline"
          className="h-16 bg-orange-500 hover:bg-orange-400 text-white border-orange-500"
          onClick={handleEqualsClick}
        >
          =
        </Button>
      </div>
    </Card>
  );
};

export default Calculator;