import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

interface ReservationCardProps {
  pricePerNight: number;
  rating: number;
  reviews: number;
}

export const ReservationCard = ({ pricePerNight, rating, reviews }: ReservationCardProps) => {
  const [selectedRange, setSelectedRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined
  });
  const [guests, setGuests] = useState(1);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleGuestsChange = (increment: boolean) => {
    if (increment && guests < 16) {
      setGuests(prev => prev + 1);
    } else if (!increment && guests > 1) {
      setGuests(prev => prev - 1);
    }
  };

  return (
    <Card className="p-6 border rounded-xl shadow-lg">
      {/* Price and Rating Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-xl font-semibold">${pricePerNight}</span>
          <span className="text-gray-500"> / night</span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4" />
          <span>{rating}</span>
          <span className="text-gray-500">({reviews} reviews)</span>
        </div>
      </div>

      {/* Date and Guest Selection */}
      <div className="space-y-4 mb-4">
        <div className="grid grid-cols-2 gap-2">
          <div 
            onClick={() => setShowCalendar(true)}
            className="border rounded-tl-lg rounded-bl-lg p-3 cursor-pointer hover:border-black"
          >
            <div className="text-xs font-semibold">CHECK-IN</div>
            <div className="text-sm text-gray-500">
              {selectedRange.from ? selectedRange.from.toLocaleDateString() : 'Add date'}
            </div>
          </div>
          <div 
            onClick={() => setShowCalendar(true)}
            className="border rounded-tr-lg rounded-br-lg p-3 cursor-pointer hover:border-black"
          >
            <div className="text-xs font-semibold">CHECKOUT</div>
            <div className="text-sm text-gray-500">
              {selectedRange.to ? selectedRange.to.toLocaleDateString() : 'Add date'}
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-3">
          <div className="text-xs font-semibold">GUESTS</div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">{guests} guest{guests !== 1 ? 's' : ''}</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleGuestsChange(false)}
                className={`p-2 rounded-full border ${guests <= 1 ? 'border-gray-200 text-gray-200' : 'border-gray-400 hover:border-black'}`}
                disabled={guests <= 1}
              >
                -
              </button>
              <span>{guests}</span>
              <button
                onClick={() => handleGuestsChange(true)}
                className={`p-2 rounded-full border ${guests >= 16 ? 'border-gray-200 text-gray-200' : 'border-gray-400 hover:border-black'}`}
                disabled={guests >= 16}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar */}
      {showCalendar && (
        <div className="border rounded-lg p-4 mb-4">
          <DayPicker
            mode="range"
            selected={selectedRange}
            onSelect={(range: any) => {
              setSelectedRange(range || { from: undefined, to: undefined });
              if (range?.to) setShowCalendar(false);
            }}
            numberOfMonths={2}
            disabled={{ before: new Date() }}
            styles={{
              months: { gap: '1rem' },
              caption: { color: '#000' },
              button: { border: 'none' },
              day_selected: { backgroundColor: '#000' },
              day_today: { color: '#FF385C' }
            }}
          />
        </div>
      )}

      {/* Reserve Button */}
      <Button 
        className="w-full bg-[#FF385C] hover:bg-[#FF385C]/90 text-white py-3 rounded-lg"
        disabled={!selectedRange.from || !selectedRange.to}
      >
        Reserve
      </Button>

      <p className="text-center text-sm text-gray-500 mt-4">
        You won't be charged yet
      </p>

      {/* Price Breakdown */}
      {selectedRange.from && selectedRange.to && (
        <div className="mt-4 pt-4 border-t space-y-4">
          <div className="flex justify-between">
            <span className="underline">
              ${pricePerNight} x {
                Math.ceil((selectedRange.to.getTime() - selectedRange.from.getTime()) / (1000 * 60 * 60 * 24))
              } nights
            </span>
            <span>
              ${pricePerNight * Math.ceil((selectedRange.to.getTime() - selectedRange.from.getTime()) / (1000 * 60 * 60 * 24))}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="underline">Cleaning fee</span>
            <span>$85</span>
          </div>
          <div className="flex justify-between">
            <span className="underline">Service fee</span>
            <span>$75</span>
          </div>
          <div className="flex justify-between pt-4 border-t font-semibold">
            <span>Total</span>
            <span>
              ${
                pricePerNight * Math.ceil((selectedRange.to.getTime() - selectedRange.from.getTime()) / (1000 * 60 * 60 * 24)) + 160
              }
            </span>
          </div>
        </div>
      )}
    </Card>
  );
};

export default ReservationCard; 