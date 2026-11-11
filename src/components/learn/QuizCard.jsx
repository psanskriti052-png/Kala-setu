import { Check, X } from 'lucide-react';
import { POINTS } from '@/data/gamification';

/**
 * One multiple-choice question with instant feedback.
 * The parent remounts this per question (key={index}), so state resets itself.
 */
export default function QuizCard({ question, index, total, onAnswer, onNext, isLast }) {
  const answered = question.selectedIndex !== undefined;

  return (
    <div className="rounded-3xl border border-kala-line bg-kala-cream p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-kala-peach px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-kala-maroon">
          {question.artFormName}
        </span>
        <span className="text-[11px] font-medium text-kala-muted">
          Question {index + 1} of {total}
        </span>
      </div>

      <h2 className="mt-3 font-display text-xl leading-snug text-kala-maroon">
        {question.question}
      </h2>

      <div className="mt-4 space-y-2">
        {question.options.map((option, optionIndex) => {
          const isCorrect = optionIndex === question.answer;
          const isPicked = question.selectedIndex === optionIndex;

          let style = 'border-kala-line bg-white hover:border-kala-gold';
          if (answered && isCorrect) style = 'border-emerald-600 bg-emerald-50 text-emerald-900';
          else if (answered && isPicked) style = 'border-kala-terracotta bg-[#FBEAE7] text-kala-maroon';
          else if (answered) style = 'border-kala-line bg-white opacity-60';

          return (
            <button
              key={option}
              type="button"
              disabled={answered}
              onClick={() => onAnswer(optionIndex)}
              className={`flex w-full items-center gap-3 rounded-xl border px-3.5 py-3 text-left text-sm font-medium transition-colors ${style}`}
            >
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-current text-[11px] font-bold">
                {String.fromCharCode(65 + optionIndex)}
              </span>
              <span className="flex-1">{option}</span>
              {answered && isCorrect && <Check className="h-4 w-4 shrink-0" aria-hidden="true" />}
              {answered && isPicked && !isCorrect && (
                <X className="h-4 w-4 shrink-0" aria-hidden="true" />
              )}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="fade-up mt-4 rounded-2xl bg-kala-peach/70 p-3.5">
          <p className="text-sm font-semibold text-kala-maroon">
            {question.selectedIndex === question.answer
              ? `Correct — +${POINTS.correctAnswer} points`
              : `Not quite — +${POINTS.wrongAnswer} points for trying`}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-kala-ink/80">{question.explanation}</p>
          <button
            type="button"
            onClick={onNext}
            className="mt-3 inline-flex items-center rounded-xl bg-kala-terracotta px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-kala-maroon"
          >
            {isLast ? 'See my score' : 'Next question'}
          </button>
        </div>
      )}
    </div>
  );
}
