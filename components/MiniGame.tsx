
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RefreshCcw, Trophy, Brain, Zap, Sun, Atom, FlaskConical, MousePointerClick } from 'lucide-react';

interface Card {
  id: number;
  content: string | React.ReactNode;
  type: 'symbol' | 'text';
  pairId: number;
  isFlipped: boolean;
  isMatched: boolean;
}

// Game Data: Symbols mapping to Text Concepts
const gameData = [
  { id: 1, symbol: <Zap size={32} />, text: "Energy" },
  { id: 2, symbol: <Sun size={32} />, text: "Photosynthesis" },
  { id: 3, symbol: <Atom size={32} />, text: "Physics" },
  { id: 4, symbol: <FlaskConical size={32} />, text: "Chemistry" },
];

const MiniGame: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [choiceOne, setChoiceOne] = useState<Card | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null);
  const [disabled, setDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [won, setWon] = useState(false);

  const shuffleCards = () => {
    const mixedCards: Card[] = [];
    gameData.forEach((item) => {
      mixedCards.push({ id: Math.random(), content: item.symbol, type: 'symbol', pairId: item.id, isFlipped: false, isMatched: false });
      mixedCards.push({ id: Math.random(), content: item.text, type: 'text', pairId: item.id, isFlipped: false, isMatched: false });
    });

    setCards(mixedCards.sort(() => Math.random() - 0.5));
    setChoiceOne(null);
    setChoiceTwo(null);
    setScore(0);
    setWon(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  const handleChoice = (card: Card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.pairId === choiceTwo.pairId) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.pairId === choiceOne.pairId) {
              return { ...card, isMatched: true };
            }
            return card;
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    if (cards.length > 0 && cards.every(c => c.isMatched)) {
      setWon(true);
    }
  }, [cards]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setScore(prev => prev + 1);
    setDisabled(false);
  };

  return (
    <section className="py-32 md:py-48 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6 text-sm font-medium text-[#38A4BE]">
            <Brain size={16} />
            <span>Interactive</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-[#121E1F] mb-4">Mind Match</h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto">
            Connect the scientific symbol to its concept. Keep your brain sharp.
          </p>
        </div>

        <div className="relative min-h-[400px]">
             {won && (
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 backdrop-blur-md rounded-3xl z-20"
                >
                    <Trophy className="w-20 h-20 text-[#F59E0B] mb-6 drop-shadow-md" />
                    <h3 className="text-3xl font-bold text-[#121E1F] mb-2">Perfect Score!</h3>
                    <p className="text-gray-500 mb-8 text-lg">You cleared the board in {score} turns.</p>
                    <button 
                        onClick={shuffleCards}
                        className="flex items-center gap-2 bg-[#121E1F] text-white px-8 py-4 rounded-full font-medium hover:bg-[#245C68] transition-all transform hover:scale-105 shadow-lg"
                    >
                        <RefreshCcw size={18} /> Play Again
                    </button>
                </motion.div>
             )}

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
            {cards.map(card => (
                <div key={card.id} className="relative h-32 md:h-40 perspective-1000">
                <motion.div
                    className={`w-full h-full relative cursor-pointer transition-all duration-500 preserve-3d`}
                    animate={{ rotateY: card.isFlipped || card === choiceOne || card === choiceTwo || card.isMatched ? 180 : 0 }}
                    onClick={() => !disabled && !card.isMatched && !card.isFlipped && card !== choiceOne && handleChoice(card)}
                >
                    {/* Front (Card Back) */}
                    <div className="absolute inset-0 backface-hidden bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center hover:border-[#38A4BE] hover:shadow-md transition-all group">
                        <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#E8F3F6] transition-colors">
                            <MousePointerClick className="text-[#38A4BE] opacity-50 group-hover:opacity-100 transition-opacity" size={20} />
                        </div>
                    </div>

                    {/* Back (Content) */}
                    <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-2xl shadow-lg flex items-center justify-center p-4 text-center border-2 ${card.isMatched ? 'bg-[#E8F3F6] border-[#38A4BE]' : 'bg-white border-[#38A4BE]'}`}>
                        <span className={`text-[#121E1F] font-semibold ${typeof card.content === 'string' ? 'text-sm' : 'text-[#38A4BE]'}`}>
                            {card.content}
                        </span>
                    </div>
                </motion.div>
                </div>
            ))}
            </div>
        </div>

      </div>
      <style>{`
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .perspective-1000 { perspective: 1000px; }
      `}</style>
    </section>
  );
};

export default MiniGame;
