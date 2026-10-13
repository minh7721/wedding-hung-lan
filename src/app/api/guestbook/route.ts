import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const GUESTBOOK_FILE = path.join(process.cwd(), 'public', 'sites', 'chungdoi', 'guestbook.json');

interface GuestbookEntry {
  id: number;
  name: string;
  message: string;
  timestamp: string;
}

// Ensure the directory exists
function ensureDirectoryExists() {
  const dir = path.dirname(GUESTBOOK_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Read guestbook entries
function readGuestbook(): GuestbookEntry[] {
  ensureDirectoryExists();
  if (!fs.existsSync(GUESTBOOK_FILE)) {
    // Initialize with empty array
    fs.writeFileSync(GUESTBOOK_FILE, JSON.stringify([], null, 2));
    return [];
  }
  const data = fs.readFileSync(GUESTBOOK_FILE, 'utf-8');
  return JSON.parse(data);
}

// Write guestbook entries
function writeGuestbook(entries: GuestbookEntry[]) {
  ensureDirectoryExists();
  fs.writeFileSync(GUESTBOOK_FILE, JSON.stringify(entries, null, 2));
}

export async function GET() {
  try {
    const entries = readGuestbook();
    return NextResponse.json(entries);
  } catch (error) {
    console.error('Error reading guestbook:', error);
    return NextResponse.json({ error: 'Failed to read guestbook' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, message } = body;

    if (!name || !message) {
      return NextResponse.json({ error: 'Name and message are required' }, { status: 400 });
    }

    const entries = readGuestbook();

    // Create new entry
    const now = new Date();
    const timestamp = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')} - ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;

    const newEntry: GuestbookEntry = {
      id: entries.length > 0 ? Math.max(...entries.map(e => e.id)) + 1 : 1,
      name: name.trim(),
      message: message.trim(),
      timestamp,
    };

    // Add new entry at the beginning
    entries.unshift(newEntry);

    writeGuestbook(entries);

    return NextResponse.json(newEntry, { status: 201 });
  } catch (error) {
    console.error('Error adding guestbook entry:', error);
    return NextResponse.json({ error: 'Failed to add entry' }, { status: 500 });
  }
}
