import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const RSVP_FILE = path.join(process.cwd(), 'public', 'sites', 'chungdoi', 'rsvp.json');

interface RSVPEntry {
  id: number;
  name: string;
  attending: boolean;
  guestCount: number;
  message: string;
  timestamp: string;
}

// Ensure the directory exists
function ensureDirectoryExists() {
  const dir = path.dirname(RSVP_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Read RSVP entries
function readRSVPs(): RSVPEntry[] {
  ensureDirectoryExists();
  if (!fs.existsSync(RSVP_FILE)) {
    fs.writeFileSync(RSVP_FILE, JSON.stringify([], null, 2));
    return [];
  }
  const data = fs.readFileSync(RSVP_FILE, 'utf-8');
  return JSON.parse(data);
}

// Write RSVP entries
function writeRSVPs(entries: RSVPEntry[]) {
  ensureDirectoryExists();
  fs.writeFileSync(RSVP_FILE, JSON.stringify(entries, null, 2));
}

export async function GET() {
  try {
    const entries = readRSVPs();
    return NextResponse.json(entries);
  } catch (error) {
    console.error('Error reading RSVPs:', error);
    return NextResponse.json({ error: 'Failed to read RSVPs' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, attending, guestCount, message } = body;

    if (!name || typeof attending !== 'boolean') {
      return NextResponse.json({ error: 'Name and attending status are required' }, { status: 400 });
    }

    const entries = readRSVPs();

    // Create new entry
    const now = new Date();
    const timestamp = now.toISOString();

    const newEntry: RSVPEntry = {
      id: entries.length > 0 ? Math.max(...entries.map(e => e.id)) + 1 : 1,
      name: name.trim(),
      attending,
      guestCount: guestCount || 1,
      message: message ? message.trim() : '',
      timestamp,
    };

    entries.push(newEntry);

    writeRSVPs(entries);

    return NextResponse.json(newEntry, { status: 201 });
  } catch (error) {
    console.error('Error adding RSVP entry:', error);
    return NextResponse.json({ error: 'Failed to add RSVP' }, { status: 500 });
  }
}

