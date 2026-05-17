'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
    CheckCircle2,
    Loader2,
    ChevronRight,
    ChevronLeft,
    Building2,
    User,
    Plus,
    Trash2,
    FileText,
    ShieldCheck,
    Upload,
    AlertCircle,
    X,
} from 'lucide-react';
import { cn } from '@/lib/utils';

type ApplicationType = 'personal' | 'business';

interface ResidenceHistory {
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    years: string;
    months: string;
    type: string;
    amount: string;
}

interface WorkHistory {
    employer: string;
    jobTitle: string;
    monthlyIncome: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    phone: string;
    years: string;
    months: string;
    otherIncome: string;
    otherSources: string;
}

const US_STATES = [
    { code: 'AL', name: 'ALABAMA' }, { code: 'AK', name: 'ALASKA' }, { code: 'AZ', name: 'ARIZONA' },
    { code: 'AR', name: 'ARKANSAS' }, { code: 'CA', name: 'CALIFORNIA' }, { code: 'CO', name: 'COLORADO' },
    { code: 'CT', name: 'CONNECTICUT' }, { code: 'DE', name: 'DELAWARE' }, { code: 'FL', name: 'FLORIDA' },
    { code: 'GA', name: 'GEORGIA' }, { code: 'HI', name: 'HAWAII' }, { code: 'ID', name: 'IDAHO' },
    { code: 'IL', name: 'ILLINOIS' }, { code: 'IN', name: 'INDIANA' }, { code: 'IA', name: 'IOWA' },
    { code: 'KS', name: 'KANSAS' }, { code: 'KY', name: 'KENTUCKY' }, { code: 'LA', name: 'LOUISIANA' },
    { code: 'ME', name: 'MAINE' }, { code: 'MD', name: 'MARYLAND' }, { code: 'MA', name: 'MASSACHUSETTS' },
    { code: 'MI', name: 'MICHIGAN' }, { code: 'MN', name: 'MINNESOTA' }, { code: 'MS', name: 'MISSISSIPPI' },
    { code: 'MO', name: 'MISSOURI' }, { code: 'MT', name: 'MONTANA' }, { code: 'NE', name: 'NEBRASKA' },
    { code: 'NV', name: 'NEVADA' }, { code: 'NH', name: 'NEW HAMPSHIRE' }, { code: 'NJ', name: 'NEW JERSEY' },
    { code: 'NM', name: 'NEW MEXICO' }, { code: 'NY', name: 'NEW YORK' }, { code: 'NC', name: 'NORTH CAROLINA' },
    { code: 'ND', name: 'NORTH DAKOTA' }, { code: 'OH', name: 'OHIO' }, { code: 'OK', name: 'OKLAHOMA' },
    { code: 'OR', name: 'OREGON' }, { code: 'PA', name: 'PENNSYLVANIA' }, { code: 'RI', name: 'RHODE ISLAND' },
    { code: 'SC', name: 'SOUTH CAROLINA' }, { code: 'SD', name: 'SOUTH DAKOTA' }, { code: 'TN', name: 'TENNESSEE' },
    { code: 'TX', name: 'TEXAS' }, { code: 'UT', name: 'UTAH' }, { code: 'VT', name: 'VERMONT' },
    { code: 'VA', name: 'VIRGINIA' }, { code: 'WA', name: 'WASHINGTON' }, { code: 'WV', name: 'WEST VIRGINIA' },
    { code: 'WI', name: 'WISCONSIN' }, { code: 'WY', name: 'WYOMING' }
];

export const CreditApplicationForm = () => {
    const [step, setStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'warning' } | null>(null);
    const [mounted, setMounted] = useState(false);

    const showToast = (message: string, type: 'success' | 'error' | 'warning' = 'error') => {
        setToast({ message, type });
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (toast) {
            const timer = setTimeout(() => {
                setToast(null);
            }, 6000);
            return () => clearTimeout(timer);
        }
    }, [toast]);

    // Form State
    const [applicationType, setApplicationType] = useState<ApplicationType>('personal');
    
    // Step 1 State
    const [step1Data, setStep1Data] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        zipCode: '',
    });

    const [step1Errors, setStep1Errors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        zipCode: false,
    });

    // Step 2 Personal State
    const [personalData, setPersonalData] = useState({
        middleName: '',
        dob: '',
        ssn: '',
        driversLicense: '',
        dlState: '',
        homePhone: '',
        workPhone: '',
        employmentStatus: '',
    });

    const [hasCoApplicant, setHasCoApplicant] = useState(false);
    const [coApplicantData, setCoApplicantData] = useState({
        firstName: '',
        lastName: '',
        middleName: '',
        dob: '',
        ssn: '',
        driversLicense: '',
        dlState: '',
        homePhone: '',
        workPhone: '',
        employmentStatus: '',
    });

    const [residenceHistory, setResidenceHistory] = useState<ResidenceHistory[]>([
        { address: '', city: '', state: '', zip: '', country: 'United States', years: '', months: '', type: '', amount: '' }
    ]);

    const [coApplicantResidenceHistory, setCoApplicantResidenceHistory] = useState<ResidenceHistory[]>([
        { address: '', city: '', state: '', zip: '', country: 'United States', years: '', months: '', type: '', amount: '' }
    ]);

    const [workHistory, setWorkHistory] = useState<WorkHistory[]>([
        { employer: '', jobTitle: '', monthlyIncome: '', address: '', city: '', state: '', zip: '', country: 'United States', phone: '', years: '', months: '', otherIncome: '', otherSources: '' }
    ]);

    const [coApplicantWorkHistory, setCoApplicantWorkHistory] = useState<WorkHistory[]>([
        { employer: '', jobTitle: '', monthlyIncome: '', address: '', city: '', state: '', zip: '', country: 'United States', phone: '', years: '', months: '', otherIncome: '', otherSources: '' }
    ]);

    // Step 2 Business State
    const [businessInfo, setBusinessInfo] = useState({
        legalName: '',
        taxId: '',
        dba: '',
        yearsInBusiness: '',
        phone: '',
        email: '',
    });

    const [businessAddress, setBusinessAddress] = useState({
        street: '',
        city: '',
        state: '',
        zip: '',
        country: 'United States',
    });

    const [businessIncome, setBusinessIncome] = useState({
        grossProfit: '',
        annualSales: '',
    });

    const [signature, setSignature] = useState('');

    // Error State for Step 2
    const [personalErrors, setPersonalErrors] = useState<any>({});
    const [coApplicantErrors, setCoApplicantErrors] = useState<any>({});
    const [businessErrors, setBusinessErrors] = useState<any>({});
    const [signatureError, setSignatureError] = useState(false);

    // File attachments states
    const [primaryIdFiles, setPrimaryIdFiles] = useState<{ name: string; content: string; size: number }[]>([]);
    const [coApplicantIdFiles, setCoApplicantIdFiles] = useState<{ name: string; content: string; size: number }[]>([]);
    const [insuranceFile, setInsuranceFile] = useState<{ name: string; content: string; size: number } | null>(null);

    // File error states
    const [primaryIdError, setPrimaryIdError] = useState(false);
    const [coApplicantIdError, setCoApplicantIdError] = useState(false);
    const [insuranceError, setInsuranceError] = useState(false);

    // Helper to calculate the combined size of all currently uploaded files (in bytes)
    const getCombinedFileSize = (additionalBytes = 0) => {
        let total = additionalBytes;
        primaryIdFiles.forEach(f => total += f.size);
        coApplicantIdFiles.forEach(f => total += f.size);
        if (insuranceFile) {
            total += insuranceFile.size;
        }
        return total;
    };

    const handleAddPrimaryIdFile = (newFile: { name: string; content: string; size: number }) => {
        setPrimaryIdFiles(prev => [...prev, newFile]);
        setPrimaryIdError(false);
    };

    const handleRemovePrimaryIdFile = (index: number) => {
        setPrimaryIdFiles(prev => prev.filter((_, idx) => idx !== index));
    };

    const handleAddCoApplicantIdFile = (newFile: { name: string; content: string; size: number }) => {
        setCoApplicantIdFiles(prev => [...prev, newFile]);
        setCoApplicantIdError(false);
    };

    const handleRemoveCoApplicantIdFile = (index: number) => {
        setCoApplicantIdFiles(prev => prev.filter((_, idx) => idx !== index));
    };

    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        setFile: (file: { name: string; content: string; size: number } | null) => void
    ) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Check if individual file size exceeds the 10MB limit
        if (file.size > 10 * 1024 * 1024) {
            showToast(`File size exceeds the 10MB limit. File size: ${(file.size / (1024 * 1024)).toFixed(2)}MB`);
            return;
        }

        // Check if total combined size exceeds the 10MB limit
        const combinedSize = getCombinedFileSize(file.size);
        if (combinedSize > 10 * 1024 * 1024) {
            showToast(`Uploading this file would exceed the 10MB total combined attachment limit.\n\nCurrent total: ${(getCombinedFileSize() / (1024 * 1024)).toFixed(2)}MB\nNew file size: ${(file.size / (1024 * 1024)).toFixed(2)}MB`);
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            const result = event.target?.result as string;
            // Get base64 content only (strip data:*/*;base64,)
            const base64Content = result.split(',')[1];
            setFile({
                name: file.name,
                content: base64Content,
                size: file.size,
            });
        };
        reader.readAsDataURL(file);
    };

    const FileUploadField = ({
        label,
        file,
        setFile,
        accept = "image/*,application/pdf",
        id,
        hasError = false,
    }: {
        label: string;
        file: { name: string; size: number } | null;
        setFile: (file: { name: string; content: string; size: number } | null) => void;
        accept?: string;
        id: string;
        hasError?: boolean;
    }) => {
        const [isDragActive, setIsDragActive] = useState(false);

        const handleDrag = (e: React.DragEvent) => {
            e.preventDefault();
            e.stopPropagation();
            if (e.type === "dragenter" || e.type === "dragover") {
                setIsDragActive(true);
            } else if (e.type === "dragleave") {
                setIsDragActive(false);
            }
        };

        const handleDrop = (e: React.DragEvent) => {
            e.preventDefault();
            e.stopPropagation();
            setIsDragActive(false);

            const droppedFile = e.dataTransfer.files?.[0];
            if (!droppedFile) return;

            // Check file size (10MB limit)
            if (droppedFile.size > 10 * 1024 * 1024) {
                showToast(`File size exceeds the 10MB limit. File size: ${(droppedFile.size / (1024 * 1024)).toFixed(2)}MB`);
                return;
            }

            // Check if total combined size exceeds the 10MB limit
            const combinedSize = getCombinedFileSize(droppedFile.size);
            if (combinedSize > 10 * 1024 * 1024) {
                showToast(`Uploading this file would exceed the 10MB total combined attachment limit.\n\nCurrent total: ${(getCombinedFileSize() / (1024 * 1024)).toFixed(2)}MB\nNew file size: ${(droppedFile.size / (1024 * 1024)).toFixed(2)}MB`);
                return;
            }

            const reader = new FileReader();
            reader.onload = (event) => {
                const result = event.target?.result as string;
                const base64Content = result.split(',')[1];
                setFile({
                    name: droppedFile.name,
                    content: base64Content,
                    size: droppedFile.size,
                });
                setInsuranceError(false);
            };
            reader.readAsDataURL(droppedFile);
        };

        return (
            <div className="space-y-2">
                <label className={cn(labelStyles, hasError && "text-red-500")}>
                    {label} {hasError && <span className="ml-1">*</span>}
                </label>
                {file ? (
                    <div className="flex items-center justify-between bg-white/5 border border-red-500/30 px-4 py-3 rounded-xl">
                        <div className="flex items-center gap-3 overflow-hidden">
                            <FileText className="text-red-500 shrink-0" size={18} />
                            <span className="text-xs text-white truncate font-medium">{file.name} ({(file.size / (1024 * 1024)).toFixed(2)}MB)</span>
                        </div>
                        <button
                            type="button"
                            onClick={() => {
                                setFile(null);
                            }}
                            className="text-white/40 hover:text-red-500 transition-colors p-1 cursor-pointer"
                        >
                            <Trash2 size={16} />
                        </button>
                    </div>
                ) : (
                    <label
                        htmlFor={id}
                        onDragEnter={handleDrag}
                        onDragOver={handleDrag}
                        onDragLeave={handleDrag}
                        onDrop={handleDrop}
                        className={cn(
                            "flex flex-col items-center justify-center border border-dashed transition-all px-4 py-6 rounded-xl cursor-pointer text-center group",
                            isDragActive 
                                ? "border-red-500 bg-red-500/10 scale-[1.02]" 
                                : (hasError ? "border-red-500/50 bg-white/5" : "border-white/20 bg-white/5 hover:bg-white/[0.08] hover:border-red-500/50")
                        )}
                    >
                        <Upload className={cn("mb-2 transition-colors", isDragActive ? "text-red-500 animate-bounce" : "text-white/30 group-hover:text-red-500")} size={20} />
                        <span className="text-[11px] font-bold text-white/50 group-hover:text-white transition-colors uppercase tracking-wider">
                            {isDragActive ? "Drop file here!" : "Choose file or Drag here"}
                        </span>
                        <span className="text-[9px] text-white/30 mt-1 uppercase tracking-widest">
                            PDF, PNG, JPG (MAX 10MB total)
                        </span>
                        <input
                            type="file"
                            id={id}
                            accept={accept}
                            onChange={(e) => {
                                handleFileChange(e, (f) => {
                                    setFile(f);
                                    if (f) setInsuranceError(false);
                                });
                            }}
                            className="hidden"
                        />
                    </label>
                )}
            </div>
        );
    };

    const MultipleFileUploadField = ({
        label,
        files,
        onAddFile,
        onRemoveFile,
        accept = "image/*,application/pdf",
        id,
        hasError = false,
    }: {
        label: string;
        files: { name: string; size: number }[];
        onAddFile: (file: { name: string; content: string; size: number }) => void;
        onRemoveFile: (index: number) => void;
        accept?: string;
        id: string;
        hasError?: boolean;
    }) => {
        const [isDragActive, setIsDragActive] = useState(false);

        const handleDrag = (e: React.DragEvent) => {
            e.preventDefault();
            e.stopPropagation();
            if (e.type === "dragenter" || e.type === "dragover") {
                setIsDragActive(true);
            } else if (e.type === "dragleave") {
                setIsDragActive(false);
            }
        };

        const handleDrop = (e: React.DragEvent) => {
            e.preventDefault();
            e.stopPropagation();
            setIsDragActive(false);

            const droppedFiles = e.dataTransfer.files;
            if (!droppedFiles) return;

            let runningCombinedSize = getCombinedFileSize();

            Array.from(droppedFiles).forEach((file) => {
                // Check if individual file size exceeds the 10MB limit
                if (file.size > 10 * 1024 * 1024) {
                    showToast(`The file "${file.name}" size exceeds the 10MB limit. File size: ${(file.size / (1024 * 1024)).toFixed(2)}MB`);
                    return;
                }

                // Check if total combined size exceeds the 10MB limit
                if (runningCombinedSize + file.size > 10 * 1024 * 1024) {
                    showToast(`Adding "${file.name}" would exceed the 10MB total combined attachment limit.\n\nCurrent total: ${(runningCombinedSize / (1024 * 1024)).toFixed(2)}MB\nFile size: ${(file.size / (1024 * 1024)).toFixed(2)}MB`);
                    return;
                }

                runningCombinedSize += file.size;

                const reader = new FileReader();
                reader.onload = (event) => {
                    const result = event.target?.result as string;
                    const base64Content = result.split(',')[1];
                    onAddFile({
                        name: file.name,
                        content: base64Content,
                        size: file.size,
                    });
                };
                reader.readAsDataURL(file);
            });
        };

        const handleMultipleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const filesList = e.target.files;
            if (!filesList) return;

            let runningCombinedSize = getCombinedFileSize();

            Array.from(filesList).forEach((file) => {
                // Check if individual file size exceeds the 10MB limit
                if (file.size > 10 * 1024 * 1024) {
                    showToast(`The file "${file.name}" size exceeds the 10MB limit. File size: ${(file.size / (1024 * 1024)).toFixed(2)}MB`);
                    return;
                }

                // Check if total combined size exceeds the 10MB limit
                if (runningCombinedSize + file.size > 10 * 1024 * 1024) {
                    showToast(`Adding "${file.name}" would exceed the 10MB total combined attachment limit.\n\nCurrent total: ${(runningCombinedSize / (1024 * 1024)).toFixed(2)}MB\nFile size: ${(file.size / (1024 * 1024)).toFixed(2)}MB`);
                    return;
                }

                runningCombinedSize += file.size;

                const reader = new FileReader();
                reader.onload = (event) => {
                    const result = event.target?.result as string;
                    const base64Content = result.split(',')[1];
                    onAddFile({
                        name: file.name,
                        content: base64Content,
                        size: file.size,
                    });
                };
                reader.readAsDataURL(file);
            });
            // Reset input value so the same file can be selected again
            e.target.value = '';
        };

        return (
            <div className="space-y-2">
                <label className={cn(labelStyles, hasError && "text-red-500")}>
                    {label} {hasError && <span className="ml-1">*</span>}
                </label>
                
                {/* Upload Area */}
                <label
                    htmlFor={id}
                    onDragEnter={handleDrag}
                    onDragOver={handleDrag}
                    onDragLeave={handleDrag}
                    onDrop={handleDrop}
                    className={cn(
                        "flex flex-col items-center justify-center border border-dashed transition-all px-4 py-6 rounded-xl cursor-pointer text-center group",
                        isDragActive 
                            ? "border-red-500 bg-red-500/10 scale-[1.02]" 
                            : (hasError ? "border-red-500/50 bg-white/5" : "border-white/20 bg-white/5 hover:bg-white/[0.08] hover:border-red-500/50")
                    )}
                >
                    <Upload className={cn("mb-2 transition-colors", isDragActive ? "text-red-500 animate-bounce" : "text-white/30 group-hover:text-red-500")} size={20} />
                    <span className="text-[11px] font-bold text-white/50 group-hover:text-white transition-colors uppercase tracking-wider">
                        {isDragActive ? "Drop files here!" : "Choose Driver's License or ID File(s)"}
                    </span>
                    <span className="text-[9px] text-white/30 mt-1 uppercase tracking-widest">
                        PDF, PNG, JPG (MAX 10MB total) - Multiple files allowed
                    </span>
                    <input
                        type="file"
                        id={id}
                        accept={accept}
                        multiple
                        onChange={handleMultipleFileChange}
                        className="hidden"
                    />
                </label>

                {/* Uploaded Files List */}
                {files.length > 0 && (
                    <div className="space-y-2 mt-3">
                        {files.map((file, idx) => (
                            <div key={idx} className="flex items-center justify-between bg-white/5 border border-white/10 px-4 py-3 rounded-xl">
                                <div className="flex items-center gap-3 overflow-hidden">
                                    <FileText className="text-red-500 shrink-0" size={18} />
                                    <span className="text-xs text-white truncate font-medium">{file.name} ({(file.size / (1024 * 1024)).toFixed(2)}MB)</span>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => onRemoveFile(idx)}
                                    className="text-white/40 hover:text-red-500 transition-colors p-1 cursor-pointer"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    const formatPhoneNumber = (value: string) => {
        if (!value) return value;
        const phoneNumber = value.replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length;
        if (phoneNumberLength < 4) return phoneNumber;
        if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    };

    const formatSSN = (value: string) => {
        const val = value.replace(/[^\d]/g, '');
        if (val.length <= 3) return val;
        if (val.length <= 5) return `${val.slice(0, 3)}-${val.slice(3)}`;
        return `${val.slice(0, 3)}-${val.slice(3, 5)}-${val.slice(5, 9)}`;
    };

    const formatEIN = (value: string) => {
        const val = value.replace(/[^\d]/g, '');
        if (val.length <= 2) return val;
        return `${val.slice(0, 2)}-${val.slice(2, 9)}`;
    };

    const handleStep1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        let finalValue = value;

        if (id === 'phone') {
            finalValue = formatPhoneNumber(value);
        } else if (id === 'zipCode') {
            finalValue = value.replace(/[^\d]/g, '').slice(0, 5);
        }

        setStep1Data({ ...step1Data, [id]: finalValue });
        if (step1Errors[id as keyof typeof step1Errors]) {
            setStep1Errors({ ...step1Errors, [id]: false });
        }
    };

    const handlePersonalChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        let finalValue = value;

        if (id === 'ssn') {
            finalValue = formatSSN(value);
        } else if (id === 'homePhone' || id === 'workPhone') {
            finalValue = formatPhoneNumber(value);
        } else if (id === 'dob') {
            const digits = value.replace(/[^\d]/g, '');
            if (digits.length <= 2) finalValue = digits;
            else if (digits.length <= 4) finalValue = `${digits.slice(0, 2)}-${digits.slice(2)}`;
            else finalValue = `${digits.slice(0, 2)}-${digits.slice(2, 4)}-${digits.slice(4, 8)}`;
        }

        setPersonalData({ ...personalData, [id]: finalValue });
        if (personalErrors[id]) {
            setPersonalErrors({ ...personalErrors, [id]: false });
        }
    };

    const handleCoApplicantChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        const field = id.replace('co-', '');
        let finalValue = value;

        if (field === 'ssn') {
            finalValue = formatSSN(value);
        } else if (field === 'homePhone' || field === 'workPhone') {
            finalValue = formatPhoneNumber(value);
        } else if (field === 'dob') {
            const digits = value.replace(/[^\d]/g, '');
            if (digits.length <= 2) finalValue = digits;
            else if (digits.length <= 4) finalValue = `${digits.slice(0, 2)}-${digits.slice(2)}`;
            else finalValue = `${digits.slice(0, 2)}-${digits.slice(2, 4)}-${digits.slice(4, 8)}`;
        }

        setCoApplicantData({ ...coApplicantData, [field]: finalValue });
        if (coApplicantErrors[field]) {
            setCoApplicantErrors({ ...coApplicantErrors, [field]: false });
        }
    };

    const handleResidenceChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        const field = id.split('-')[1];
        let finalValue = value;

        if (['years', 'months', 'zip'].includes(field)) {
            finalValue = value.replace(/[^\d]/g, '');
        } else if (field === 'amount') {
            finalValue = value.replace(/[^\d.]/g, '');
        }

        const newHistory = [...residenceHistory];
        // @ts-ignore
        newHistory[index][field] = finalValue;
        setResidenceHistory(newHistory);
    };

    const handleCoResidenceChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        const field = id.split('-')[1];
        let finalValue = value;

        if (['years', 'months', 'zip'].includes(field)) {
            finalValue = value.replace(/[^\d]/g, '');
        } else if (field === 'amount') {
            finalValue = value.replace(/[^\d.]/g, '');
        }

        const newHistory = [...coApplicantResidenceHistory];
        // @ts-ignore
        newHistory[index][field] = finalValue;
        setCoApplicantResidenceHistory(newHistory);
    };

    const handleWorkChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        const field = id.split('-')[1];
        let finalValue = value;

        if (['years', 'months', 'zip'].includes(field)) {
            finalValue = value.replace(/[^\d]/g, '');
        } else if (field === 'monthlyIncome' || field === 'otherIncome') {
            finalValue = value.replace(/[^\d.]/g, '');
        } else if (field === 'phone') {
            finalValue = formatPhoneNumber(value);
        }

        const newHistory = [...workHistory];
        // @ts-ignore
        newHistory[index][field] = finalValue;
        setWorkHistory(newHistory);
    };

    const handleCoWorkChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        const field = id.split('-')[1];
        let finalValue = value;

        if (['years', 'months', 'zip'].includes(field)) {
            finalValue = value.replace(/[^\d]/g, '');
        } else if (field === 'monthlyIncome' || field === 'otherIncome') {
            finalValue = value.replace(/[^\d.]/g, '');
        } else if (field === 'phone') {
            finalValue = formatPhoneNumber(value);
        }

        const newHistory = [...coApplicantWorkHistory];
        // @ts-ignore
        newHistory[index][field] = finalValue;
        setCoApplicantWorkHistory(newHistory);
    };

    const handleBusinessInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        const field = id.startsWith('biz-') ? id.replace('biz-', '') : id;
        let finalValue = value;

        if (field === 'taxId') {
            finalValue = formatEIN(value);
        } else if (field === 'phone') {
            finalValue = formatPhoneNumber(value);
        } else if (field === 'yearsInBusiness') {
            finalValue = value.replace(/[^\d]/g, '');
        }

        setBusinessInfo({ ...businessInfo, [field]: finalValue });
        if (businessErrors[field]) {
            setBusinessErrors({ ...businessErrors, [field]: false });
        }
    };

    const handleBusinessAddressChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        let finalValue = value;
        if (id === 'zip') finalValue = value.replace(/[^\d]/g, '');
        setBusinessAddress({ ...businessAddress, [id]: finalValue });
    };

    const handleBusinessIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        const finalValue = value.replace(/[^\d.]/g, '');
        setBusinessIncome({ ...businessIncome, [id]: finalValue });
    };

    const addResidence = () => {
        setResidenceHistory([...residenceHistory, { address: '', city: '', state: '', zip: '', country: 'United States', years: '', months: '', type: '', amount: '' }]);
    };

    const removeResidence = (index: number) => {
        setResidenceHistory(residenceHistory.filter((_, i) => i !== index));
    };

    const addCoResidence = () => {
        setCoApplicantResidenceHistory([...coApplicantResidenceHistory, { address: '', city: '', state: '', zip: '', country: 'United States', years: '', months: '', type: '', amount: '' }]);
    };

    const removeCoResidence = (index: number) => {
        setCoApplicantResidenceHistory(coApplicantResidenceHistory.filter((_, i) => i !== index));
    };

    const addWork = () => {
        setWorkHistory([...workHistory, { employer: '', jobTitle: '', monthlyIncome: '', address: '', city: '', state: '', zip: '', country: 'United States', phone: '', years: '', months: '', otherIncome: '', otherSources: '' }]);
    };

    const removeWork = (index: number) => {
        setWorkHistory(workHistory.filter((_, i) => i !== index));
    };

    const addCoWork = () => {
        setCoApplicantWorkHistory([...coApplicantWorkHistory, { employer: '', jobTitle: '', monthlyIncome: '', address: '', city: '', state: '', zip: '', country: 'United States', phone: '', years: '', months: '', otherIncome: '', otherSources: '' }]);
    };

    const removeCoWork = (index: number) => {
        setCoApplicantWorkHistory(coApplicantWorkHistory.filter((_, i) => i !== index));
    };

    const validateStep1 = () => {
        const errors = {
            firstName: !step1Data.firstName.trim(),
            lastName: !step1Data.lastName.trim(),
            email: !step1Data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(step1Data.email),
            phone: step1Data.phone.replace(/[^\d]/g, '').length < 10,
            zipCode: !/^\d{5}$/.test(step1Data.zipCode),
        };
        setStep1Errors(errors);
        return !Object.values(errors).some(Boolean);
    };

    const nextStep = () => {
        if (step === 1) {
            if (validateStep1()) {
                setStep(2);
                window.scrollTo(0, 0);
            }
        } else {
            setStep(step + 1);
            window.scrollTo(0, 0);
        }
    };
    const prevStep = () => {
        setStep(step - 1);
        window.scrollTo(0, 0);
    };

    const validateStep2 = () => {
        let isFilesValid = true;

        if (applicationType === 'personal') {
            const hasPrimaryId = primaryIdFiles.length > 0;
            setPrimaryIdError(!hasPrimaryId);

            let hasCoId = true;
            if (hasCoApplicant) {
                hasCoId = coApplicantIdFiles.length > 0;
                setCoApplicantIdError(!hasCoId);
            } else {
                setCoApplicantIdError(false);
            }

            const hasInsurance = insuranceFile !== null;
            setInsuranceError(!hasInsurance);

            isFilesValid = hasPrimaryId && hasCoId && hasInsurance;

            const errors: any = {
                dob: !personalData.dob.trim(),
                ssn: personalData.ssn.replace(/[^\d]/g, '').length < 9,
                driversLicense: !personalData.driversLicense.trim(),
                dlState: !personalData.dlState.trim(),
                employmentStatus: !personalData.employmentStatus.trim(),
            };
            setPersonalErrors(errors);

            let isCoApplicantValid = true;
            if (hasCoApplicant) {
                const coErrors: any = {
                    firstName: !coApplicantData.firstName.trim(),
                    lastName: !coApplicantData.lastName.trim(),
                    dob: !coApplicantData.dob.trim(),
                    ssn: coApplicantData.ssn.replace(/[^\d]/g, '').length < 9,
                    driversLicense: !coApplicantData.driversLicense.trim(),
                    dlState: !coApplicantData.dlState.trim(),
                    employmentStatus: !coApplicantData.employmentStatus.trim(),
                };
                setCoApplicantErrors(coErrors);
                isCoApplicantValid = !Object.values(coErrors).some(Boolean);
            }

            const isSignatureValid = signature.trim().length > 0;
            setSignatureError(!isSignatureValid);

            return !Object.values(errors).some(Boolean) && isCoApplicantValid && isSignatureValid && isFilesValid;
        } else {
            const hasInsurance = insuranceFile !== null;
            setInsuranceError(!hasInsurance);

            isFilesValid = hasInsurance;

            const errors: any = {
                legalName: !businessInfo.legalName.trim(),
                taxId: businessInfo.taxId.replace(/[^\d]/g, '').length < 9,
                yearsInBusiness: !businessInfo.yearsInBusiness.trim(),
                phone: businessInfo.phone.replace(/[^\d]/g, '').length < 10,
                email: !businessInfo.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(businessInfo.email),
                street: !businessAddress.street.trim(),
                city: !businessAddress.city.trim(),
                state: !businessAddress.state.trim(),
                zip: !businessAddress.zip.trim(),
                grossProfit: !businessIncome.grossProfit.trim(),
                annualSales: !businessIncome.annualSales.trim(),
            };
            setBusinessErrors(errors);
            const isSignatureValid = signature.trim().length > 0;
            setSignatureError(!isSignatureValid);

            return !Object.values(errors).some(Boolean) && isSignatureValid && isFilesValid;
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Google Ads Conversion Tracking
        if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
            (window as any).gtag_report_conversion();
        }

        if (!validateStep2()) {
            window.scrollTo(0, 0);
            return;
        }
        setIsSending(true);
        setError(null);
        const payload = {
            ...step1Data,
            applicationType,
            personalData,
            hasCoApplicant,
            coApplicantData,
            residenceHistory,
            workHistory,
            coApplicantResidenceHistory,
            coApplicantWorkHistory,
            businessInfo,
            businessAddress,
            businessIncome,
            signature,
            primaryIdAttachment: primaryIdFiles,
            coApplicantIdAttachment: coApplicantIdFiles,
            insuranceAttachment: insuranceFile,
        };
        try {
            const response = await fetch('/api/credit-application', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            if (!response.ok) throw new Error('Failed to submit application');
            setIsSubmitted(true);
        } catch (err) {
            setError('Something went wrong. Please try again or contact us.');
        } finally {
            setIsSending(false);
        }
    };

    const inputStyles = "w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors placeholder:text-white/20 rounded-xl";
    const selectStyles = cn(inputStyles, "[&_option]:bg-[#0a0a0a] [&_option]:text-white appearance-none cursor-pointer");
    const labelStyles = "block text-[10px] font-black uppercase tracking-widest text-white/50 mb-2";
    const sectionTitleStyles = "text-xl font-bold uppercase tracking-tight mb-8 flex items-center gap-3 italic";

    if (isSubmitted) {
        return (
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-20 text-center space-y-6"
            >
                <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 mx-auto">
                    <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-bold italic tracking-tighter uppercase">Application Received</h2>
                <p className="text-white/60 max-w-md mx-auto">
                    Thank you for trusting <span className="text-red-600 font-bold">101 Auto Group</span>. Our financing team will review your application and contact you shortly.
                </p>
                <button 
                    onClick={() => window.location.href = '/'}
                    className="bg-white text-black px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                    Back to Home
                </button>
            </motion.div>
        );
    }

    return (
        <div className="relative z-10">
            {/* Elegant Premium Toast Notifications (Portal) */}
            {mounted && createPortal(
                <AnimatePresence>
                    {toast && (
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.9 }}
                            className="fixed bottom-6 right-6 z-[9999] max-w-sm w-[calc(100vw-3rem)] md:w-full bg-[#111111]/95 backdrop-blur-2xl border border-red-500/30 p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(239,68,68,0.1)] flex items-start gap-3 pointer-events-auto"
                        >
                            <div className="p-1.5 rounded-xl bg-red-500/10 text-red-500 mt-0.5 shrink-0">
                                <AlertCircle size={18} />
                            </div>
                            <div className="flex-1 space-y-1">
                                <p className="text-[10px] font-black uppercase tracking-widest text-red-500">
                                    LIMIT EXCEEDED
                                </p>
                                <p className="text-xs text-white/90 leading-relaxed font-medium">
                                    {toast.message}
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setToast(null)}
                                className="text-white/20 hover:text-white transition-colors p-1 cursor-pointer"
                            >
                                <X size={14} />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
            {/* Progress Bar */}
            <div className="flex gap-2 mb-12">
                <div className={cn("h-1.5 flex-1 rounded-full transition-colors duration-500", step >= 1 ? "bg-red-500" : "bg-white/10")} />
                <div className={cn("h-1.5 flex-1 rounded-full transition-colors duration-500", step >= 2 ? "bg-red-500" : "bg-white/10")} />
            </div>

            <AnimatePresence mode="wait">
                {step === 1 ? (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className={cn(labelStyles, step1Errors.firstName && "text-red-500")} htmlFor="firstName">
                                    First Name {step1Errors.firstName && <span className="ml-1">*</span>}
                                </label>
                                <input 
                                    type="text" id="firstName" value={step1Data.firstName} 
                                    onChange={handleStep1Change} className={cn(inputStyles, step1Errors.firstName && "border-red-500/50")} placeholder="FIRST NAME" required 
                                />
                                {step1Errors.firstName && (
                                    <p className="text-red-500 text-[9px] font-bold mt-1 uppercase tracking-widest">This field is required</p>
                                )}
                            </div>
                            <div>
                                <label className={cn(labelStyles, step1Errors.lastName && "text-red-500")} htmlFor="lastName">
                                    Last Name {step1Errors.lastName && <span className="ml-1">*</span>}
                                </label>
                                <input 
                                    type="text" id="lastName" value={step1Data.lastName} 
                                    onChange={handleStep1Change} className={cn(inputStyles, step1Errors.lastName && "border-red-500/50")} placeholder="LAST NAME" required 
                                />
                                {step1Errors.lastName && (
                                    <p className="text-red-500 text-[9px] font-bold mt-1 uppercase tracking-widest">This field is required</p>
                                )}
                            </div>
                        </div>
                        <div>
                            <label className={cn(labelStyles, step1Errors.email && "text-red-500")} htmlFor="email">
                                Email Address {step1Errors.email && <span className="ml-1">(INVALID)</span>}
                            </label>
                            <input 
                                type="email" id="email" value={step1Data.email} 
                                onChange={handleStep1Change} className={cn(inputStyles, step1Errors.email && "border-red-500/50")} placeholder="EMAIL@EXAMPLE.COM" required 
                            />
                            {step1Errors.email && (
                                <p className="text-red-500 text-[9px] font-bold mt-1 uppercase tracking-widest">Please enter a valid email address</p>
                            )}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className={cn(labelStyles, step1Errors.phone && "text-red-500")} htmlFor="phone">
                                    Phone Number {step1Errors.phone && <span className="ml-1">(10 DIGITS)</span>}
                                </label>
                                <input 
                                    type="tel" id="phone" value={step1Data.phone} 
                                    onChange={handleStep1Change} className={cn(inputStyles, step1Errors.phone && "border-red-500/50")} placeholder="(000) 000-0000" required 
                                />
                                {step1Errors.phone && (
                                    <p className="text-red-500 text-[9px] font-bold mt-1 uppercase tracking-widest">10 digits required</p>
                                )}
                            </div>
                            <div>
                                <label className={cn(labelStyles, step1Errors.zipCode && "text-red-500")} htmlFor="zipCode">
                                    Zip Code {step1Errors.zipCode && <span className="ml-1">(5 DIGITS)</span>}
                                </label>
                                <input 
                                    type="text" id="zipCode" value={step1Data.zipCode} 
                                    onChange={handleStep1Change} className={cn(inputStyles, step1Errors.zipCode && "border-red-500/50")} placeholder="92606" required 
                                />
                                {step1Errors.zipCode && (
                                    <p className="text-red-500 text-[9px] font-bold mt-1 uppercase tracking-widest">5 digit zip code required</p>
                                )}
                            </div>
                        </div>

                        <div className="pt-8">
                            <button 
                                onClick={nextStep}
                                className="w-full bg-white text-black py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                            >
                                Continue <ChevronRight size={18} />
                            </button>
                            <p className="text-center text-[10px] text-white/30 mt-6 uppercase tracking-widest">
                                Secure SSL encrypted credit application form.
                            </p>
                        </div>
                    </motion.div>
                ) : (
                    <motion.form
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        onSubmit={handleSubmit}
                        className="space-y-12"
                    >
                        {/* App Type Switcher */}
                        <div className="flex flex-col items-center gap-6 mb-12">
                            <label className={labelStyles}>Select Application Type</label>
                            <div className="flex gap-4 p-1.5 bg-white/5 border border-white/10 rounded-full">
                                <button
                                    type="button"
                                    onClick={() => setApplicationType('personal')}
                                    className={cn(
                                        "px-8 py-3 rounded-full font-bold uppercase text-[10px] tracking-widest transition-all flex items-center gap-2 cursor-pointer",
                                        applicationType === 'personal' ? "bg-red-500 text-white" : "text-white/40 hover:text-white"
                                    )}
                                >
                                    <User size={14} /> Personal
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setApplicationType('business')}
                                    className={cn(
                                        "px-8 py-3 rounded-full font-bold uppercase text-[10px] tracking-widest transition-all flex items-center gap-2 cursor-pointer",
                                        applicationType === 'business' ? "bg-red-500 text-white" : "text-white/40 hover:text-white"
                                    )}
                                >
                                    <Building2 size={14} /> Business
                                </button>
                            </div>
                        </div>

                        {applicationType === 'personal' ? (
                            <div className="space-y-12">
                                <section>
                                    <h3 className={sectionTitleStyles}><User size={20} className="text-red-500" /> Applicant Information</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                        <div>
                                            <label className={labelStyles}>First Name</label>
                                            <input type="text" className={cn(inputStyles, "opacity-50")} value={step1Data.firstName} disabled />
                                        </div>
                                        <div>
                                            <label className={labelStyles}>Last Name</label>
                                            <input type="text" className={cn(inputStyles, "opacity-50")} value={step1Data.lastName} disabled />
                                        </div>
                                        <div>
                                            <label className={labelStyles} htmlFor="middleName">Middle Name</label>
                                            <input type="text" id="middleName" className={inputStyles} value={personalData.middleName} onChange={handlePersonalChange} />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label className={cn(labelStyles, personalErrors.dob && "text-red-500")} htmlFor="dob">
                                                Date of Birth (MM-DD-YYYY) {personalErrors.dob && <span className="ml-1">*</span>}
                                            </label>
                                            <input type="text" id="dob" className={cn(inputStyles, personalErrors.dob && "border-red-500/50")} placeholder="01-01-1990" value={personalData.dob} onChange={handlePersonalChange} required />
                                        </div>
                                        <div>
                                            <label className={cn(labelStyles, personalErrors.ssn && "text-red-500")} htmlFor="ssn">
                                                SSN or ITIN {personalErrors.ssn && <span className="ml-1">(INVALID)</span>}
                                            </label>
                                            <input type="text" id="ssn" className={cn(inputStyles, personalErrors.ssn && "border-red-500/50")} placeholder="XXX-XX-XXXX" value={personalData.ssn} onChange={handlePersonalChange} required />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label className={cn(labelStyles, personalErrors.driversLicense && "text-red-500")} htmlFor="driversLicense">
                                                Driver's License No. {personalErrors.driversLicense && <span className="ml-1">*</span>}
                                            </label>
                                            <input type="text" id="driversLicense" className={cn(inputStyles, personalErrors.driversLicense && "border-red-500/50")} value={personalData.driversLicense} onChange={handlePersonalChange} required />
                                        </div>
                                        <div>
                                            <label className={cn(labelStyles, personalErrors.dlState && "text-red-500")} htmlFor="dlState">
                                                DL Issuing State {personalErrors.dlState && <span className="ml-1">*</span>}
                                            </label>
                                            <select id="dlState" className={cn(selectStyles, personalErrors.dlState && "border-red-500/50")} value={personalData.dlState} onChange={handlePersonalChange} required>
                                                <option value="">SELECT STATE</option>
                                                {US_STATES.map(state => (
                                                    <option key={state.code} value={state.code}>{state.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <MultipleFileUploadField
                                            label="Driver's License / ID Photo(s)"
                                            files={primaryIdFiles}
                                            onAddFile={handleAddPrimaryIdFile}
                                            onRemoveFile={handleRemovePrimaryIdFile}
                                            id="primary-id-upload"
                                            hasError={primaryIdError}
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div>
                                            <label className={labelStyles}>Email</label>
                                            <input type="email" className={cn(inputStyles, "opacity-50")} value={step1Data.email} disabled />
                                        </div>
                                        <div>
                                            <label className={labelStyles} htmlFor="homePhone">Home Phone</label>
                                            <input type="tel" id="homePhone" className={inputStyles} value={personalData.homePhone} onChange={handlePersonalChange} />
                                        </div>
                                        <div>
                                            <label className={cn(labelStyles, personalErrors.employmentStatus && "text-red-500")} htmlFor="employmentStatus">
                                                Employment Status {personalErrors.employmentStatus && <span className="ml-1">*</span>}
                                            </label>
                                            <select id="employmentStatus" className={cn(selectStyles, personalErrors.employmentStatus && "border-red-500/50")} value={personalData.employmentStatus} onChange={handlePersonalChange} required>
                                                <option value="">CHOOSE STATUS</option>
                                                <option value="employed">EMPLOYED</option>
                                                <option value="self-employed">SELF-EMPLOYED</option>
                                                <option value="retired">RETIRED</option>
                                                <option value="unemployed">UNEMPLOYED</option>
                                            </select>
                                        </div>
                                    </div>

                                </section>

                                <section>
                                    <h3 className={sectionTitleStyles}><Building2 size={20} className="text-red-500" /> Residence History (2 Years)</h3>
                                    {residenceHistory.map((res, index) => (
                                        <div key={index} className="px-4 py-6 md:p-8 bg-white/[0.02] border border-white/5 rounded-3xl mb-6 relative">
                                            {index > 0 && (
                                                <button type="button" onClick={() => removeResidence(index)} className="absolute top-6 right-6 text-white/20 hover:text-red-500 transition-colors cursor-pointer">
                                                    <Trash2 size={18} />
                                                </button>
                                            )}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                                <div className="md:col-span-2">
                                                    <label className={labelStyles}>Street Address</label>
                                                    <input type="text" id={`res-address-${index}`} className={inputStyles} value={res.address} onChange={(e) => handleResidenceChange(index, e)} required />
                                                </div>
                                                <div>
                                                    <label className={labelStyles}>City</label>
                                                    <input type="text" id={`res-city-${index}`} className={inputStyles} value={res.city} onChange={(e) => handleResidenceChange(index, e)} required />
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label className={labelStyles}>State</label>
                                                        <input type="text" id={`res-state-${index}`} className={inputStyles} value={res.state} onChange={(e) => handleResidenceChange(index, e)} required />
                                                    </div>
                                                    <div>
                                                        <label className={labelStyles}>Zip</label>
                                                        <input type="text" id={`res-zip-${index}`} className={inputStyles} value={res.zip} onChange={(e) => handleResidenceChange(index, e)} required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                                                <div>
                                                    <label className={labelStyles}>Years</label>
                                                    <input type="number" id={`res-years-${index}`} className={inputStyles} value={res.years} onChange={(e) => handleResidenceChange(index, e)} required />
                                                </div>
                                                <div>
                                                    <label className={labelStyles}>Months</label>
                                                    <input type="number" id={`res-months-${index}`} className={inputStyles} value={res.months} onChange={(e) => handleResidenceChange(index, e)} required />
                                                </div>
                                                <div>
                                                    <label className={labelStyles}>Residence Type</label>
                                                    <select id={`res-type-${index}`} className={selectStyles} value={res.type} onChange={(e) => handleResidenceChange(index, e)} required>
                                                        <option value="">SELECT</option>
                                                        <option value="own">OWN</option>
                                                        <option value="rent">RENT</option>
                                                        <option value="other">OTHER</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className={labelStyles}>Monthly Pmt</label>
                                                    <input type="text" id={`res-amount-${index}`} className={inputStyles} placeholder="$0.00" value={res.amount} onChange={(e) => handleResidenceChange(index, e)} required />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <button type="button" onClick={addResidence} className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-red-500 flex items-center gap-2 transition-colors cursor-pointer">
                                        <Plus size={14} /> Add Another Address
                                    </button>
                                </section>

                                <section>
                                    <h3 className={sectionTitleStyles}><FileText size={20} className="text-red-500" /> Work History (2 Years)</h3>
                                    {workHistory.map((work, index) => (
                                        <div key={index} className="px-4 py-6 md:p-8 bg-white/[0.02] border border-white/5 rounded-3xl mb-6 relative">
                                            {index > 0 && (
                                                <button type="button" onClick={() => removeWork(index)} className="absolute top-6 right-6 text-white/20 hover:text-red-500 transition-colors cursor-pointer">
                                                    <Trash2 size={18} />
                                                </button>
                                            )}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                                <div>
                                                    <label className={labelStyles}>Current Employer</label>
                                                    <input type="text" id={`work-employer-${index}`} className={inputStyles} value={work.employer} onChange={(e) => handleWorkChange(index, e)} required />
                                                </div>
                                                <div>
                                                    <label className={labelStyles}>Job Title</label>
                                                    <input type="text" id={`work-jobTitle-${index}`} className={inputStyles} value={work.jobTitle} onChange={(e) => handleWorkChange(index, e)} required />
                                                </div>
                                                <div>
                                                    <label className={labelStyles}>Gross Monthly Income</label>
                                                    <input type="text" id={`work-monthlyIncome-${index}`} className={inputStyles} placeholder="$0,000" value={work.monthlyIncome} onChange={(e) => handleWorkChange(index, e)} required />
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label className={labelStyles}>Years</label>
                                                        <input type="number" id={`work-years-${index}`} className={inputStyles} value={work.years} onChange={(e) => handleWorkChange(index, e)} required />
                                                    </div>
                                                    <div>
                                                        <label className={labelStyles}>Months</label>
                                                        <input type="number" id={`work-months-${index}`} className={inputStyles} value={work.months} onChange={(e) => handleWorkChange(index, e)} required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="md:col-span-2">
                                                    <label className={labelStyles}>Employer Address</label>
                                                    <input type="text" id={`work-address-${index}`} className={inputStyles} value={work.address} onChange={(e) => handleWorkChange(index, e)} required />
                                                </div>
                                                <div>
                                                    <label className={labelStyles}>Employer Phone</label>
                                                    <input type="tel" id={`work-phone-${index}`} className={inputStyles} value={work.phone} onChange={(e) => handleWorkChange(index, e)} required />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <button type="button" onClick={addWork} className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-red-500 flex items-center gap-2 transition-colors cursor-pointer">
                                        <Plus size={14} /> Add Another Job
                                    </button>
                                </section>

                                <div className="pt-12 border-t border-white/5">
                                    <div 
                                        onClick={() => setHasCoApplicant(!hasCoApplicant)}
                                        className="flex items-center gap-4 cursor-pointer group w-fit"
                                    >
                                        <div className={cn(
                                            "w-5 h-5 rounded-md border flex items-center justify-center transition-all",
                                            hasCoApplicant ? "bg-red-500 border-red-500" : "border-white/20 group-hover:border-white/40"
                                        )}>
                                            {hasCoApplicant && <Plus size={14} className="text-white" />}
                                        </div>
                                        <span className={cn(
                                            "text-xs font-bold uppercase tracking-widest transition-colors",
                                            hasCoApplicant ? "text-white" : "text-white/40 group-hover:text-white/60"
                                        )}>
                                            Include Spouse or Co-Applicant Information
                                        </span>
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {hasCoApplicant && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-12 space-y-12">
                                                <section>
                                                    <h3 className={sectionTitleStyles}><User size={20} className="text-red-500" /> Spouse or Co-Applicant Information</h3>
                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                                        <div>
                                                            <label className={cn(labelStyles, coApplicantErrors.firstName && "text-red-500")} htmlFor="co-firstName">First Name {coApplicantErrors.firstName && "*"}</label>
                                                            <input type="text" id="co-firstName" className={cn(inputStyles, coApplicantErrors.firstName && "border-red-500/50")} value={coApplicantData.firstName} onChange={handleCoApplicantChange} required />
                                                        </div>
                                                        <div>
                                                            <label className={cn(labelStyles, coApplicantErrors.lastName && "text-red-500")} htmlFor="co-lastName">Last Name {coApplicantErrors.lastName && "*"}</label>
                                                            <input type="text" id="co-lastName" className={cn(inputStyles, coApplicantErrors.lastName && "border-red-500/50")} value={coApplicantData.lastName} onChange={handleCoApplicantChange} required />
                                                        </div>
                                                        <div>
                                                            <label className={labelStyles} htmlFor="co-middleName">Middle Name</label>
                                                            <input type="text" id="co-middleName" className={inputStyles} value={coApplicantData.middleName} onChange={handleCoApplicantChange} />
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                                        <div>
                                                            <label className={cn(labelStyles, coApplicantErrors.dob && "text-red-500")} htmlFor="co-dob">Date of Birth (MM-DD-YYYY) {coApplicantErrors.dob && "*"}</label>
                                                            <input type="text" id="co-dob" className={cn(inputStyles, coApplicantErrors.dob && "border-red-500/50")} placeholder="01-01-1990" value={coApplicantData.dob} onChange={handleCoApplicantChange} required />
                                                        </div>
                                                        <div>
                                                            <label className={cn(labelStyles, coApplicantErrors.ssn && "text-red-500")} htmlFor="co-ssn">SSN or ITIN {coApplicantErrors.ssn && "(INVALID)"}</label>
                                                            <input type="text" id="co-ssn" className={cn(inputStyles, coApplicantErrors.ssn && "border-red-500/50")} placeholder="XXX-XX-XXXX" value={coApplicantData.ssn} onChange={handleCoApplicantChange} required />
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                                        <div>
                                                            <label className={cn(labelStyles, coApplicantErrors.driversLicense && "text-red-500")} htmlFor="co-driversLicense">Driver's License No. {coApplicantErrors.driversLicense && "*"}</label>
                                                            <input type="text" id="co-driversLicense" className={cn(inputStyles, coApplicantErrors.driversLicense && "border-red-500/50")} value={coApplicantData.driversLicense} onChange={handleCoApplicantChange} required />
                                                        </div>
                                                        <div>
                                                            <label className={cn(labelStyles, coApplicantErrors.dlState && "text-red-500")} htmlFor="co-dlState">DL Issuing State {coApplicantErrors.dlState && "*"}</label>
                                                            <select id="co-dlState" className={cn(selectStyles, coApplicantErrors.dlState && "border-red-500/50")} value={coApplicantData.dlState} onChange={handleCoApplicantChange} required>
                                                                <option value="">SELECT STATE</option>
                                                                {US_STATES.map(state => (
                                                                    <option key={state.code} value={state.code}>{state.name}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="mb-6">
                                                        <MultipleFileUploadField
                                                            label="Co-Applicant Driver's License / ID Photo(s)"
                                                            files={coApplicantIdFiles}
                                                            onAddFile={handleAddCoApplicantIdFile}
                                                            onRemoveFile={handleRemoveCoApplicantIdFile}
                                                            id="co-id-upload"
                                                            hasError={coApplicantIdError}
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                         <div>
                                                             <label className={labelStyles} htmlFor="co-homePhone">Home Phone</label>
                                                             <input type="tel" id="co-homePhone" className={inputStyles} value={coApplicantData.homePhone} onChange={handleCoApplicantChange} />
                                                         </div>
                                                         <div>
                                                             <label className={cn(labelStyles, coApplicantErrors.employmentStatus && "text-red-500")} htmlFor="co-employmentStatus">Employment Status {coApplicantErrors.employmentStatus && "*"}</label>
                                                             <select id="co-employmentStatus" className={cn(selectStyles, coApplicantErrors.employmentStatus && "border-red-500/50")} value={coApplicantData.employmentStatus} onChange={handleCoApplicantChange} required>
                                                                 <option value="">CHOOSE STATUS</option>
                                                                 <option value="employed">EMPLOYED</option>
                                                                 <option value="self-employed">SELF-EMPLOYED</option>
                                                                 <option value="retired">RETIRED</option>
                                                                 <option value="unemployed">UNEMPLOYED</option>
                                                             </select>
                                                         </div>
                                                     </div>
                                                 </section>

                                                 <section>
                                                     <h3 className={sectionTitleStyles}><Building2 size={20} className="text-red-500" /> Spouse Residence History (2 Years)</h3>
                                                     {coApplicantResidenceHistory.map((res, index) => (
                                                         <div key={index} className="px-4 py-6 md:p-8 bg-white/[0.02] border border-white/5 rounded-3xl mb-6 relative">
                                                             {index > 0 && (
                                                                 <button type="button" onClick={() => removeCoResidence(index)} className="absolute top-6 right-6 text-white/20 hover:text-red-500 transition-colors cursor-pointer">
                                                                     <Trash2 size={18} />
                                                                 </button>
                                                             )}
                                                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                                                 <div className="md:col-span-2">
                                                                     <label className={labelStyles}>Street Address</label>
                                                                     <input type="text" id={`cores-address-${index}`} className={inputStyles} value={res.address} onChange={(e) => handleCoResidenceChange(index, e)} required />
                                                                 </div>
                                                                 <div>
                                                                     <label className={labelStyles}>City</label>
                                                                     <input type="text" id={`cores-city-${index}`} className={inputStyles} value={res.city} onChange={(e) => handleCoResidenceChange(index, e)} required />
                                                                 </div>
                                                                 <div className="grid grid-cols-2 gap-4">
                                                                     <div>
                                                                         <label className={labelStyles}>State</label>
                                                                         <input type="text" id={`cores-state-${index}`} className={inputStyles} value={res.state} onChange={(e) => handleCoResidenceChange(index, e)} required />
                                                                     </div>
                                                                     <div>
                                                                         <label className={labelStyles}>Zip</label>
                                                                         <input type="text" id={`cores-zip-${index}`} className={inputStyles} value={res.zip} onChange={(e) => handleCoResidenceChange(index, e)} required />
                                                                     </div>
                                                                 </div>
                                                             </div>
                                                             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                                                                 <div>
                                                                     <label className={labelStyles}>Years</label>
                                                                     <input type="number" id={`cores-years-${index}`} className={inputStyles} value={res.years} onChange={(e) => handleCoResidenceChange(index, e)} required />
                                                                 </div>
                                                                 <div>
                                                                     <label className={labelStyles}>Months</label>
                                                                     <input type="number" id={`cores-months-${index}`} className={inputStyles} value={res.months} onChange={(e) => handleCoResidenceChange(index, e)} required />
                                                                 </div>
                                                                 <div>
                                                                     <label className={labelStyles}>Residence Type</label>
                                                                     <select id={`cores-type-${index}`} className={selectStyles} value={res.type} onChange={(e) => handleCoResidenceChange(index, e)} required>
                                                                         <option value="">SELECT</option>
                                                                         <option value="own">OWN</option>
                                                                         <option value="rent">RENT</option>
                                                                         <option value="other">OTHER</option>
                                                                     </select>
                                                                 </div>
                                                                 <div>
                                                                     <label className={labelStyles}>Monthly Pmt</label>
                                                                     <input type="text" id={`cores-amount-${index}`} className={inputStyles} placeholder="$0.00" value={res.amount} onChange={(e) => handleCoResidenceChange(index, e)} required />
                                                                 </div>
                                                             </div>
                                                         </div>
                                                     ))}
                                                     <button type="button" onClick={addCoResidence} className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-red-500 flex items-center gap-2 transition-colors cursor-pointer">
                                                         <Plus size={14} /> Add Another Address
                                                     </button>
                                                 </section>

                                                 <section>
                                                     <h3 className={sectionTitleStyles}><FileText size={20} className="text-red-500" /> Spouse Work History (2 Years)</h3>
                                                     {coApplicantWorkHistory.map((work, index) => (
                                                         <div key={index} className="px-4 py-6 md:p-8 bg-white/[0.02] border border-white/5 rounded-3xl mb-6 relative">
                                                             {index > 0 && (
                                                                 <button type="button" onClick={() => removeCoWork(index)} className="absolute top-6 right-6 text-white/20 hover:text-red-500 transition-colors cursor-pointer">
                                                                     <Trash2 size={18} />
                                                                 </button>
                                                             )}
                                                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                                                 <div>
                                                                     <label className={labelStyles}>Current Employer</label>
                                                                     <input type="text" id={`cowork-employer-${index}`} className={inputStyles} value={work.employer} onChange={(e) => handleCoWorkChange(index, e)} required />
                                                                 </div>
                                                                 <div>
                                                                     <label className={labelStyles}>Job Title</label>
                                                                     <input type="text" id={`cowork-jobTitle-${index}`} className={inputStyles} value={work.jobTitle} onChange={(e) => handleCoWorkChange(index, e)} required />
                                                                 </div>
                                                                 <div>
                                                                     <label className={labelStyles}>Gross Monthly Income</label>
                                                                     <input type="text" id={`cowork-monthlyIncome-${index}`} className={inputStyles} placeholder="$0,000" value={work.monthlyIncome} onChange={(e) => handleCoWorkChange(index, e)} required />
                                                                 </div>
                                                                 <div className="grid grid-cols-2 gap-4">
                                                                     <div>
                                                                         <label className={labelStyles}>Years</label>
                                                                         <input type="number" id={`cowork-years-${index}`} className={inputStyles} value={work.years} onChange={(e) => handleCoWorkChange(index, e)} required />
                                                                     </div>
                                                                     <div>
                                                                         <label className={labelStyles}>Months</label>
                                                                         <input type="number" id={`cowork-months-${index}`} className={inputStyles} value={work.months} onChange={(e) => handleCoWorkChange(index, e)} required />
                                                                     </div>
                                                                 </div>
                                                             </div>
                                                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                                 <div className="md:col-span-2">
                                                                     <label className={labelStyles}>Employer Address</label>
                                                                     <input type="text" id={`cowork-address-${index}`} className={inputStyles} value={work.address} onChange={(e) => handleCoWorkChange(index, e)} required />
                                                                 </div>
                                                                 <div>
                                                                     <label className={labelStyles}>Employer Phone</label>
                                                                     <input type="tel" id={`cowork-phone-${index}`} className={inputStyles} value={work.phone} onChange={(e) => handleCoWorkChange(index, e)} required />
                                                                 </div>
                                                             </div>
                                                         </div>
                                                     ))}
                                                     <button type="button" onClick={addCoWork} className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-red-500 flex items-center gap-2 transition-colors cursor-pointer">
                                                         <Plus size={14} /> Add Another Job
                                                     </button>
                                                 </section>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <div className="space-y-12">
                                <section>
                                    <h3 className={sectionTitleStyles}><Building2 size={20} className="text-red-500" /> Business Information</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label className={cn(labelStyles, businessErrors.legalName && "text-red-500")} htmlFor="legalName">
                                                Company Legal Name {businessErrors.legalName && <span className="ml-1">*</span>}
                                            </label>
                                            <input type="text" id="legalName" className={cn(inputStyles, businessErrors.legalName && "border-red-500/50")} value={businessInfo.legalName} onChange={handleBusinessInfoChange} required />
                                        </div>
                                        <div>
                                            <label className={cn(labelStyles, businessErrors.taxId && "text-red-500")} htmlFor="taxId">
                                                Tax ID (EIN) {businessErrors.taxId && <span className="ml-1">(INVALID)</span>}
                                            </label>
                                            <input type="text" id="taxId" className={cn(inputStyles, businessErrors.taxId && "border-red-500/50")} value={businessInfo.taxId} onChange={handleBusinessInfoChange} required />
                                        </div>
                                        <div>
                                            <label className={labelStyles} htmlFor="dba">Company Name (DBA)</label>
                                            <input type="text" id="dba" className={inputStyles} value={businessInfo.dba} onChange={handleBusinessInfoChange} />
                                        </div>
                                        <div>
                                            <label className={cn(labelStyles, businessErrors.yearsInBusiness && "text-red-500")} htmlFor="yearsInBusiness">
                                                Years In Business {businessErrors.yearsInBusiness && <span className="ml-1">*</span>}
                                            </label>
                                            <input type="number" id="yearsInBusiness" className={cn(inputStyles, businessErrors.yearsInBusiness && "border-red-500/50")} value={businessInfo.yearsInBusiness} onChange={handleBusinessInfoChange} required />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className={cn(labelStyles, businessErrors.phone && "text-red-500")} htmlFor="biz-phone">
                                                Business Phone {businessErrors.phone && <span className="ml-1">(10 DIGITS)</span>}
                                            </label>
                                            <input type="tel" id="biz-phone" className={cn(inputStyles, businessErrors.phone && "border-red-500/50")} value={businessInfo.phone} onChange={handleBusinessInfoChange} required />
                                        </div>
                                        <div>
                                            <label className={cn(labelStyles, businessErrors.email && "text-red-500")} htmlFor="biz-email">
                                                Business Email {businessErrors.email && <span className="ml-1">(INVALID)</span>}
                                            </label>
                                            <input type="email" id="biz-email" className={cn(inputStyles, businessErrors.email && "border-red-500/50")} value={businessInfo.email} onChange={handleBusinessInfoChange} required />
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h3 className={sectionTitleStyles}><ShieldCheck size={20} className="text-red-500" /> Business Address</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div className="md:col-span-2">
                                            <label className={cn(labelStyles, businessErrors.street && "text-red-500")} htmlFor="street">
                                                Street Address {businessErrors.street && <span className="ml-1">*</span>}
                                            </label>
                                            <input type="text" id="street" className={cn(inputStyles, businessErrors.street && "border-red-500/50")} value={businessAddress.street} onChange={handleBusinessAddressChange} required />
                                        </div>
                                        <div>
                                            <label className={cn(labelStyles, businessErrors.city && "text-red-500")} htmlFor="city">
                                                City {businessErrors.city && <span className="ml-1">*</span>}
                                            </label>
                                            <input type="text" id="city" className={cn(inputStyles, businessErrors.city && "border-red-500/50")} value={businessAddress.city} onChange={handleBusinessAddressChange} required />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className={cn(labelStyles, businessErrors.state && "text-red-500")} htmlFor="state">
                                                    State {businessErrors.state && <span className="ml-1">*</span>}
                                                </label>
                                                <input type="text" id="state" className={cn(inputStyles, businessErrors.state && "border-red-500/50")} value={businessAddress.state} onChange={handleBusinessAddressChange} required />
                                            </div>
                                            <div>
                                                <label className={cn(labelStyles, businessErrors.zip && "text-red-500")} htmlFor="zip">
                                                    Zip {businessErrors.zip && <span className="ml-1">*</span>}
                                                </label>
                                                <input type="text" id="zip" className={cn(inputStyles, businessErrors.zip && "border-red-500/50")} value={businessAddress.zip} onChange={handleBusinessAddressChange} required />
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h3 className={sectionTitleStyles}><Plus size={20} className="text-red-500" /> Income Information</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className={cn(labelStyles, businessErrors.grossProfit && "text-red-500")} htmlFor="grossProfit">
                                                Gross Profit (Monthly) {businessErrors.grossProfit && <span className="ml-1">*</span>}
                                            </label>
                                            <input type="text" id="grossProfit" className={cn(inputStyles, businessErrors.grossProfit && "border-red-500/50")} placeholder="$0,000" value={businessIncome.grossProfit} onChange={handleBusinessIncomeChange} required />
                                        </div>
                                        <div>
                                            <label className={cn(labelStyles, businessErrors.annualSales && "text-red-500")} htmlFor="annualSales">
                                                Annual Sales {businessErrors.annualSales && <span className="ml-1">*</span>}
                                            </label>
                                            <input type="text" id="annualSales" className={cn(inputStyles, businessErrors.annualSales && "border-red-500/50")} placeholder="$0,000,000" value={businessIncome.annualSales} onChange={handleBusinessIncomeChange} required />
                                        </div>
                                    </div>
                                </section>
                            </div>
                        )}

                        <section>
                            <h3 className={sectionTitleStyles}><FileText size={20} className="text-red-500" /> Auto Insurance Verification</h3>
                            <div className="bg-white/5 border border-white/10 p-5 md:p-8 rounded-3xl space-y-6">
                                <p className="text-white/60 text-[11px] leading-relaxed">
                                    If you currently have auto insurance, please upload a copy of your insurance card or policy document. This helps expedite the vehicle financing and pickup process.
                                </p>
                                <FileUploadField
                                    label="Auto Insurance Document"
                                    file={insuranceFile}
                                    setFile={setInsuranceFile}
                                    id="insurance-upload"
                                    hasError={insuranceError}
                                />
                            </div>
                        </section>

                        <section>
                            <h3 className={sectionTitleStyles}><ShieldCheck size={20} className="text-red-500" /> Terms and Conditions</h3>
                            <div className="bg-white/5 border border-white/10 p-5 md:p-8 rounded-3xl space-y-6">
                                <p className="text-white/60 text-[11px] leading-relaxed">
                                    I certify that the above information is true and complete to the best of my knowledge. I authorize <span className="text-red-600 font-bold">101 Auto Group</span> to check my credit and employment history, obtain credit reports, and/or to submit my application to one or more financial institutions for the purpose of securing credit.
                                </p>
                                <div>
                                    <label className={cn(labelStyles, signatureError && "text-red-500")} htmlFor="signature">
                                        Type Full Name to Sign {signatureError && <span className="ml-1">*</span>}
                                    </label>
                                    <input 
                                        type="text" id="signature" className={cn(inputStyles, "font-serif italic text-2xl py-6", signatureError && "border-red-500/50")} placeholder="FULL NAME" value={signature} onChange={(e) => {
                                            setSignature(e.target.value);
                                            if (signatureError) setSignatureError(false);
                                        }} required 
                                    />
                                </div>
                            </div>
                        </section>

                        <div className="flex gap-4 pt-8">
                            <button
                                type="button"
                                onClick={prevStep}
                                className="flex-1 bg-white/5 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-white/10 transition-all cursor-pointer"
                            >
                                <ChevronLeft size={18} /> Back
                            </button>
                            <button
                                type="submit"
                                disabled={isSending}
                                className="flex-[2] bg-red-600 hover:bg-red-500 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,59,48,0.3)] disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                            >
                                {isSending ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" /> Submitting...
                                    </>
                                ) : (
                                    <>
                                        Submit Application <CheckCircle2 size={18} />
                                    </>
                                )}
                            </button>
                        </div>
                        {error && <p className="text-red-500 text-center text-[10px] font-bold uppercase tracking-widest mt-4">{error}</p>}
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
};
