import React, { useState } from 'react';
import ButtonCard from '../../ui/button-card';

const Questions = ({ productID, questions }) => {
    const [newQuestion, setNewQuestion] = useState('');

    const handleSubmitQuestion = (e) => {
        e.preventDefault();
        // Logic for submitting question
        console.log('Submitting question:', newQuestion);
        setNewQuestion('');
    };

    return (
        <div className="w-full flex flex-col gap-10 py-12">
            <h3 className="text-2xl text-[#23262F] font-PoppinsMedium leading-[34px] tracking-headline-6 transition-all hover:drop-shadow-custom">Product Questions</h3>

            {/* Question Input Form */}
            <form onSubmit={handleSubmitQuestion} className="space-y-4">
                <textarea
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    placeholder="Ask your question..."
                    rows="4"
                    className="w-full font-InterMedium text-neutral-05 text-base tracking-normal leading-relaxed bg-transparent p-3 outline-none rounded-2xl border-2 border-neutral-03 transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                />
                <ButtonCard
                    title="Send a question"
                    className="box-border inline-flex items-center justify-center text-white font-InterMedium text-base text-center bg-neutral-07 gap-2 px-10 py-1.5 h-10 w-44 rounded-lg tracking-button-s leading-7 whitespace-nowrap transition-all hover:drop-shadow-custom"
                />
            </form>

            {/* Questions List */}
            <div className="space-y-4">
                {questions && questions.length > 0 ? (
                    questions.map((question) => (
                        <div key={question._id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-semibold text-gray-700">{question.author}</span>
                                <span className="text-sm text-gray-500">{question.date}</span>
                            </div>
                            <p className="text-gray-800">{question.text}</p>

                            {/* Answers */}
                            {question.answers && question.answers.map((answer) => (
                                <div key={answer._id} className="mt-3 p-3 bg-gray-50 rounded-lg border-r-4 border-blue-500">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-semibold text-blue-600">پاسخ فروشگاه</span>
                                        <span className="text-xs text-gray-500">{answer.date}</span>
                                    </div>
                                    <p className="text-gray-700">{answer.text}</p>
                                </div>
                            ))}
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 py-8">No questions have been asked yet.</p>
                )}
            </div>
        </div>
    );
};

export default Questions;